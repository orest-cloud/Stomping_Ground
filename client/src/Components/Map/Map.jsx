import React from 'react';

import './Map.scss';

import map from '../../Assets/Images/map_dummy.png'

export default function Map() {
  return (

    <div className="map">
      <img src={map} alt="Google Map" className="map__map"/>
    </div>


  )
}