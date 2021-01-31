import React from 'react';

import './PlaceHeading.scss';

export default function PlaceHeading({heading, subheading}) {

  return (

    <div className="placeHeading">
      <h2 className="placeHeading__heading">{heading}</h2>

      <h3 className="placeHeading__subheading">{subheading}</h3>
      {/* <span className="placeHeading__subheading-span">{hood}</span> */}


    </div>

  )
}