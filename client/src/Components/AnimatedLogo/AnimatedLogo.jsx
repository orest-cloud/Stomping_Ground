import React from 'react';

import './AnimatedLogo.scss';

export default function AnimatedLogo(props) {

  const source = null;

  if (props.mode = "animated") {
    source = "AnimatedLogo.html";
  } else {
    source = "AnimatedLogo_Static.html";
  }
  
  return (
    
    <iframe src={source} scrolling="no" frameborder="0" class="logo__frame"></iframe>
  )
}