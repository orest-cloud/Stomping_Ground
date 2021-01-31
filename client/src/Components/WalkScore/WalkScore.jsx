import React from 'react';

import './WalkScore.scss';

import widget from '../../Assets/Images/walkscore.jpg'

export default function WalkScore() {
  return (

    <div className="walkscore">
      <img src={widget} alt="WalkScore" className="walkscore__image"/>
    </div>


  )
}