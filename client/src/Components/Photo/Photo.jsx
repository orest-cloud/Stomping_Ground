import React from 'react';

import './Photo.scss';

export default function Photo(props) {

  const image = props.image;
  const name = props.name;

  //API calls on or off config
  const {gphotos_enabled} = require('../../api-config');

  // If API calls are disabled, don't use base64 path
  let imagePath = '';
  if (gphotos_enabled) {
    imagePath = 'data:image/jpeg;base64,';
  }

  return (

    <div className="photo-image">
      <img src={`${imagePath}${image}`} alt={name} className="photo-image__image"/>
    </div>

  )
}