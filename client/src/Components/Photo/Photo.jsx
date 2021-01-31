import React from 'react';

import './Photo.scss';

export default function Photo({image}) {

  return (

    <div className="photo-image">
      <img src={image} alt="Place of interest" className="photo-image__image"/>
    </div>

  )
}