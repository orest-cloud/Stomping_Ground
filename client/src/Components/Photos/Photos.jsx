import React from 'react';
import { v4 as uuid } from "uuid";

import Photo from '../Photo/Photo'

import './Photos.scss';

export default function Photos(props) {

  var photosData = props.data;
  
  // Declaration of variables
  let blockMode = null;
  let dataToRender = null;  
  let photosRender = null;

  //API calls on or off config
  const {gphotos_enabled} = require('../../api-config');

  // Text 'Provided by' indicates to developer whether what is being displayed are placeholder images
  var providedBySource;
  if (gphotos_enabled) {
    providedBySource = 'Google Maps Places';
  } else {
    providedBySource = 'Placeholder Images';
  }


  // If component mode is 'row' then it displays a full-width photo view
  // If 'column', then a small row of 4 photos on the side
  if (props.mode === "row") {
    // Sets a class to "row mode"
    blockMode = "photos--row-mode";

    // If API calls not enabled, use dummy images
    if (!gphotos_enabled) {
      photosData = require('../../data/dummy-image-data.json');
    }

    // Slices the array to 15 entries or less
    dataToRender = photosData.slice(0, 15);

    photosRender = 
      <div className="photos-row">
      {/* Generates rows of photos from the data */}
      {dataToRender.map(data => {
        return (<Photo key={uuid()} id={uuid()} image={data.imagedata} name={data.name} />)
      })}
    </div>

  } else {
    // Sets a class to "column mode"
    blockMode = "photos--column-mode";

    // If API calls not enabled, use dummy images
    if (!gphotos_enabled) {
      photosData = require('../../data/dummy-image-data.json');
    }

    // Slices the array to 5 entries or less
    dataToRender = photosData.slice(0, 8);

    photosRender =
    <div className="photos-column">
    {dataToRender.map(data => {
      return (<Photo key={uuid()} id={uuid()} image={data.imagedata} name={data.name} />)
    })}
    </div>      
  }

  return (

    <section className={`photos ${blockMode}`}>
      <div className="photos__content-container">
        <h2 className="photos__heading">Photos of the neighborhood</h2>
        <p className="photos__sub-heading">Provided by {providedBySource}</p>

        {photosRender}
        
      </div>
    </section>
  )
}