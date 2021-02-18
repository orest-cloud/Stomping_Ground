import React from 'react';

import './AnimatedLogo.scss';

export default function AnimatedLogo(props) {

  console.log('%c State in AnimatedLogo.jsx', "color: red; font-weight: bold;");
	console.log(props);

  var source = null;
  if (props.mode === "animated") {
    source = "AnimatedLogo.html";
  } else {
    source = "AnimatedLogo_Static.html";
  }

  // var animatedLogoDisplayMode = "logo__frame--hidden";
  // var staticLogoDisplayMode = "logo__frame--visible";

  // if (props.mode === "animated") {
  //   animatedLogoDisplayMode = "logo__frame--visible";
  //   staticLogoDisplayMode = "logo__frame--hidden";
  // } else {
  //   animatedLogoDisplayMode = "logo__frame--hidden";
  //   staticLogoDisplayMode = "logo__frame--visible";
  // }
  
  return (
    <iframe title="Animated logo" src={source} scrolling="no" frameBorder="0" className="logo__frame"></iframe>
  )
}