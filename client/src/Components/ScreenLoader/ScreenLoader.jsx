import React from 'react';

import './ScreenLoader.scss';

import loader from '../../Assets/Images/sg-loader.gif';


export default function ScreenLoader() {

  return (

    <div className="screen-loader">
      <img src={loader} className="screen-loader__loader" alt="Loading content" />
      <p className="screen-loader__text">Loading...</p>
    </div>

  )
}