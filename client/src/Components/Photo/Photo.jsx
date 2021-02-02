import React from 'react';

import './Photo.scss';

export default function Photo(props) {

  const image = props.image;
  const name = props.name;

  return (

    <div className="photo-image">
      <img src={`data:image/jpeg;base64,${image}`} alt={name} className="photo-image__image"/>
    </div>

  )
}