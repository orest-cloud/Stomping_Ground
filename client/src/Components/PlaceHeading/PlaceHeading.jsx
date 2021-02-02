import React from 'react';
import {Link} from 'react-router-dom';

import './PlaceHeading.scss';

export default function PlaceHeading({heading, subheading, hood, hoodLink}) {

  var subheadingBlock = null;

  if (!hood) {
    subheadingBlock = <h3 className="placeHeading__subheading">{subheading}</h3>
  } else {
    subheadingBlock = <h3 className="placeHeading__subheading">{subheading}<Link to={`/results/${hoodLink}`} className="placeHeading__subheading-link">{hood}</Link></h3>
  }

  return (

    <div className="placeHeading">
      <h2 className="placeHeading__heading">{heading}</h2>
      {subheadingBlock}
    </div>

  )
}