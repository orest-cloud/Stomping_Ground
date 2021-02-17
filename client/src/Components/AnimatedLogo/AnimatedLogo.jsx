import React from 'react';
import { useState } from "react";
import AnimateCC, { GetAnimationObjectParameter } from "react-adobe-animate";

import './AnimatedLogo.scss';

export default function AnimatedLogo() {

  const [paused, setPaused] = useState(false);
  // const [animationObject, getAnimationObject] = useState<GetAnimationObjectParameter|null>(null);
  const _a = useState(null), animationObject = _a[0], getAnimationObject = _a[1];
  const onClick = () => setPaused(!paused);

  console.log(animationObject);

  return (
    <div style={{ width: "400px" }}>
      <AnimateCC
        animationName="AnimatedLogo"
        getAnimationObject={getAnimationObject}
        paused={paused}
      />

      <button onClick={onClick}>{paused ? "Unpause" : "Pause"}</button><br />
    </div>
  );
}