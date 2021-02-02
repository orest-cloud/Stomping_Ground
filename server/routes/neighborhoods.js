const express = require('express')
const { response } = require('express');
const router = express.Router()
const axios = require('axios');

const neighborhoods = require('../data/neighborhoods.json');
const properties = require('../data/properties.json');

const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { stringify } = require('querystring');

const apikey = "AIzaSyAUiAAMvTlsK-rT4pdUru3DOSDK4jhOjjA";


//==============================================//
// Functions for processing Google Photos data
//==============================================//

//get latitude and longitude of address
async function googleApiGetLatLng(addressName) {
    try {
      const data = await axios.get("https://maps.googleapis.com/maps/api/place/findplacefromtext/json?inputtype=textquery&fields=photos,formatted_address,name,geometry", { params: { input: addressName, key: apikey }});
      if (data.data.status = "OK") {
        let lat = data.data.candidates[0].geometry.location.lat;
        let lng = data.data.candidates[0].geometry.location.lng;
        return {lat:lat,lng:lng};
      }
    }
    catch (err) {
      next(err)
    }
  }

  //get nearby locations to latitude and longitude
async function googleApiGetNearby(lat, lng) {
    try {
    const data = await axios.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?radius=1500", { params: { location: lat + "," + lng, key: apikey }});
      //check if match successful
      if (data.data.status == 'OK') {
        let photoRefList = [];
        for (let i = 0; i < data.data.results.length; i++) {
          let photos = data.data.results[i].photos;
          if (photos != null && photos.length > 0) {
            let photoref = photos[0].photo_reference;
            if (photoref != null) {
              photoRefList.push({name: data.data.results[i].name, photoref:photoref});
            }
          }
        }
        return photoRefList;
      }
    }
    catch (err) {
      next(err)
    }
  }

//get image data by photo reference Id
async function googleApiGetPhotos(photoRefList, limit) {
    try {
      let iLimit = Number.parseInt(limit);

      let requestList = [];

      //prepare all requests
      for (let i = 0; i < photoRefList.length && i < iLimit; i++) {
        let request = axios.get("https://maps.googleapis.com/maps/api/place/photo?maxwidth=400", { params: { photoreference: photoRefList[i].photoref, key: apikey }, responseType: 'arraybuffer' })
        requestList.push(request);
      }

      //wait for all requests to complete
      const data = await axios.all(requestList);

      //prepare return data
      let returnData = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].status == 200) {
          //convert image data to base64
          let base64 = Buffer.from(data[i].data, 'binary').toString('base64');
          returnData.push({name:photoRefList[i].name, imagedata: base64})
        }
      }
      
      return returnData;
    }
    catch (err) {
      console.log(err)
    }
  }
  
  
//==============================================//
// Endpoints
//==============================================//

router
.get('/', (req, res) => {
    return res.send(neighborhoods);
    })
	
	
// Gets info on a neighborhood, and listings in that neighborhood
router
.get('/:id', async function(req, res) {
	// Package to return
	responsePackage = [];
	
	// Gets neighborhood info
    let hoodID = neighborhoods.find((hood)=> hood.id == req.params.id);
	responsePackage.push(hoodID);
	
	// Gets property listings
	let listings = properties.filter((property)=> property.neighborhood == req.params.id);
	responsePackage.push(listings);
	
	// Gets address string to pass to Google Photos functions
	let placeQuery = hoodID.location.address;
	console.log("PlaceQuery is: " + placeQuery);
	
	
	// Starts routine to get Google Photos
	 try {
		//get latitude and longitude of address
		let latlngData = await googleApiGetLatLng(placeQuery);

		//get nearby locations to address
		let nearbyData = await googleApiGetNearby(latlngData.lat, latlngData.lng);

		//get photo data of nearby locations
		let photoData = await googleApiGetPhotos(nearbyData, req.query.limit);

		//push photo data to response Package
		responsePackage.push(photoData);
	}
	catch (err) {
		console.log(err)
	}
	
    return res.send(responsePackage);
    })	
	
	
	
module.exports = router;