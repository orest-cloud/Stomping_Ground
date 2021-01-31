import React from 'react';

import Photo from '../Photo/Photo'

import './Photos.scss';

export default function Photos(props) {

  const photosData = [
    {
      id: 1,
      src: "https://i.imgur.com/bRYsNY9.jpg"
    },
    {
      id: 2,
      src: "https://i.imgur.com/bRYsNY9.jpg"
    },
    {
      id: 3,
      src: "https://i.imgur.com/bRYsNY9.jpg"
    },
    {
      id: 4,
      src: "https://i.imgur.com/bRYsNY9.jpg"
    },
    {
      id: 5,
      src: "https://i.imgur.com/bRYsNY9.jpg"
    },
    {
      id: 6,
      src: "https://i.imgur.com/bRYsNY9.jpg"
    },
    {
      id: 7,
      src: "https://i.imgur.com/bRYsNY9.jpg"
    },
    {
      id: 8,
      src: "https://i.imgur.com/bRYsNY9.jpg"
    },
    {
      id: 9,
      src: "https://i.imgur.com/bRYsNY9.jpg"
    },
    {
      id: 10,
      src: "https://i.imgur.com/bRYsNY9.jpg"
    },
    {
      id: 11,
      src: "https://i.imgur.com/bRYsNY9.jpg"
    },
    {
      id: 12,
      src: "https://i.imgur.com/bRYsNY9.jpg"
    },
    {
      id: 13,
      src: "https://i.imgur.com/bRYsNY9.jpg"
    },
    {
      id: 14,
      src: "https://i.imgur.com/bRYsNY9.jpg"
    },
    {
      id: 15,
      src: "https://i.imgur.com/bRYsNY9.jpg"
    }
  ];
  
  // Declaration of variables
  let blockMode = null;
  let dataToRender = null;  
  let photosRender = null;

  // If component mode is 'row' then it displays a full-width photo view
  // If 'column', then a small row of 4 photos on the side
  if (props.mode === "row") {
    // Sets a class to "row mode"
    blockMode = "photos--row-mode";

    // Slices the array to 15 entries or less
    dataToRender = photosData.slice(0, 15);

    photosRender = 
      <div className="photos-row">
      {/* Generates rows of photos from the data */}
      {dataToRender.map(data => {
        return (<Photo key={data.id} id={data.id} image={data.src} />)
      })}
    </div>

  } else {
    // Sets a class to "column mode"
    blockMode = "photos--column-mode";
    // Slices the array to 5 entries or less
    dataToRender = photosData.slice(0, 8);

    photosRender =
    <div className="photos-column">
    {dataToRender.map(data => {
      return (<Photo key={data.id} id={data.id} image={data.src} />)
    })}
    </div>      
  }

  return (

    <section className={`photos ${blockMode}`}>

      <h2 className="photos__heading">Photos of the neighborhood</h2>
      <p className="photos__sub-heading">Provided by Google Maps Places</p>

      {photosRender}

    </section>
  )
}