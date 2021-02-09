import React from 'react';

import './Map.scss';

export default function Map(props) {

  // Specify whether map is centring on a general area or pinning an address
  // "centre" or "pin"
  const mapMode = props.mode;
  let mapSource = null;

  // API key import
	const {apikey} = require('../../config');

  
  if (mapMode === "centre") {
    const latitude = props.latitude;
    const longitude = props.longitude;

    // center on an area
    mapSource = `https://www.google.com/maps/embed/v1/view?zoom=14&center=${latitude}%2C${longitude}&key=${apikey}`;

  } else {
    // Sample query:
    // 627A%20Durie%20St%2C%20Toronto%2C%20Ontario%20M6S3H2
    const query = props.query;

    // pin a place
    mapSource = `https://www.google.com/maps/embed/v1/place?q=${query}&key=${apikey}`;
  }
  

  return (

    // Old dummy image
    // <div className="map">
    //   <img src={map} alt="Google Map" className="map__map"/>
    // </div>

<iframe title="uniqueTitle" width="600" height="450" frameBorder="0" src={mapSource} allowFullScreen></iframe>


  )
}