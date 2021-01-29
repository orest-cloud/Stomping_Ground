import React from 'react';
import { Link } from 'react-router-dom';

import './Hero.scss';

export default function Hero() {
  return (

    <section className="hero">
      <div className="hero__container">
        <h1 className="hero__heading">Stomping<span className="hero__heading-span">Ground</span></h1>
        <h3 className="hero__sub-heading">Get a feel for the neighborhood you're thinking of living in.</h3>

        <div className="hero__inputs-container">
          <input type="text" className="hero__input" placeholder="Enter an address or intersection" />
          <button className="hero__button">GO!</button>
        </div>

        <ul className="hero__list">
          <li className="hero__list-item">Live MLS listings</li>
          <li className="hero__list-item">WalkScore</li>
          <li className="hero__list-item">Neighborhood Photos</li>
        </ul>


      </div>
    </section>

  )
}