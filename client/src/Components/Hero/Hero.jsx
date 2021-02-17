import React from 'react';
import {Link} from 'react-router-dom';

import AnimatedLogo from '../AnimatedLogo/AnimatedLogo'

import './Hero.scss';

export default function Hero() {
  return (

    <section className="hero">
      <div className="hero__container">
        <AnimatedLogo />
        <h1 className="hero__heading">Stomping<span className="hero__heading-span">Ground</span></h1>
        <h3 className="hero__sub-heading">Get a feel for the Toronto neighborhood you're thinking of living in.</h3>


        <ul className="hero__list">
          <li className="hero__list-item">Live MLS listings</li>
          <li className="hero__list-item">WalkScore&reg;</li>
          <li className="hero__list-item">Neighborhood Photos</li>
        </ul>

        
        <h2 className="hero__call-to-action">Choose an area to begin</h2>

        <div className="hero__links-list-container">
          <ul className="hero__links-list">
            <li className="hero__links-list-item"><Link to="/results/f2f2553a" className="hero__links-list-item-link">Runnymede</Link></li>
            <li className="hero__links-list-item"><Link to="/results/5467678567867878" className="hero__links-list-item-link">Lawrence Park</Link></li>
          </ul>

          <ul className="hero__links-list">
            <li className="hero__links-list-item"><Link to="/results/f2f2553a" className="hero__links-list-item-link">Leslieville</Link></li>
            <li className="hero__links-list-item"><Link to="/results/f2f2553a" className="hero__links-list-item-link">Parkdale</Link></li>
          </ul>

          <ul className="hero__links-list">
            <li className="hero__links-list-item"><Link to="/results/f2f2553a" className="hero__links-list-item-link">Rosedale</Link></li>
            <li className="hero__links-list-item"><Link to="/results/f2f2553a" className="hero__links-list-item-link">Swansea</Link></li>
          </ul>

          <ul className="hero__links-list">
            <li className="hero__links-list-item"><Link to="/results/f2f2553a" className="hero__links-list-item-link">Willowdale</Link></li>
            <li className="hero__links-list-item"><Link to="/results/f2f2553a" className="hero__links-list-item-link">York University Heights</Link></li>
          </ul>
        </div>

      </div>
    </section>

  )
}