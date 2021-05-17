const express = require('express')
const router = express.Router()
const axios = require('axios');

const neighborhoods = require('../data/neighborhoods.json');
const properties = require('../data/properties.json');

// API key import
const {apikey} = require('../config');

//API calls on or off config
const {gphotos_enabled} = require('../api-config');
const dummyImageData = require('../data/dummy-image-data.json');

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
      console.log(err)
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

  console.log(`Neighborhoods route intiated with req ${req.params.id}`);

	// Package to returnreq
	responsePackage = [];
	
	// Gets neighborhood info
    let hoodID = neighborhoods.find((hood)=> hood.id == req.params.id);
	responsePackage.push(hoodID);
	
	// Gets property listings
	let listings = properties.filter((property)=> property.neighborhood == req.params.id);
	responsePackage.push(listings);
	
	// Gets address string to pass to Google Photos functions
	let placeQuery = `${hoodID.address}, ${hoodID.city}, Ontario, ${hoodID.postalcode}`;
	
  console.log('%c  PlaceQuery in neighborhoods route is: ', "color: green; font-weight: bold;");
  console.log(`  ${placeQuery}`);

  // If API calls are enabled, then make the calls
	if (gphotos_enabled) {
    console.log(`APIkey being used is ${apikey}`);
    console.log(`Gphotos asyncs initiated because gphotos_enabled is ${gphotos_enabled}`);

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
  // Else API calls must be disabled, so send back dummy photos
  } else {
    responsePackage.push(dummyImageData);
  }
	
  return res.send(responsePackage);
  })	
	
	
	
module.exports = router;