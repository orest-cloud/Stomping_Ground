import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { v4 as uuid } from "uuid";

import AnimatedLogo from '../AnimatedLogo/AnimatedLogo'

import './Hero.scss';

export default class Hero extends Component {

  state = {
    neighborhoodsList: [
      {name: "Annex", id: ""},
      {name: "The Beaches", id: ""},
      {name: "Cabbagetown", id: ""},
      {name: "Casa Loma", id: ""},
      {name: "Danforth", id: ""},
      {name: "Dufferin Grove", id: ""},
      {name: "Forest Hill", id: ""},
      {name: "High Park", id: ""},
      {name: "Kensington", id: ""},
      {name: "Lawrence Park", id: "5467678567867878"},
      {name: "Leslieville", id: ""},
      {name: "Little Portugal", id: ""},
      {name: "Parkdale", id: ""},
      {name: "Regent Park", id: ""},
      {name: "Roncesvalles", id: "89896773435445"},
      {name: "Riverdale", id: ""},
      {name: "Rosedale", id: ""},
      {name: "Runnymede", id: "f2f2553a"},
      {name: "Swansea", id: ""},
      {name: "Trinity-Bellwoods", id: ""},
      {name: "University", id: ""},
      {name: "Willowdale", id: ""},
      {name: "Wychwood", id: ""},
      {name: "York University Heights", id: ""}
    ],
    logoAnimationDone: false,
    logoMode: "static"
  }

  heroMouseoverHandler = () => {
    if (this.state.logoAnimationDone === false) {
      this.setState({
        logoAnimationDone: true,
        logoMode: "animated"
      })
    }

  }

  render() {
    console.log('%c State before render:', "color: blue; font-weight: bold;");
    console.log(this.state);

    return (

      <section className="hero">
        <div className="hero__container" onMouseOver={this.heroMouseoverHandler}>
          <AnimatedLogo mode={this.state.logoMode} />
          <h3 className="hero__sub-heading">Get a feel for the Toronto neighborhood you're thinking of living in.</h3>


          <ul className="hero__list">
            <li className="hero__list-item">Live MLS listings</li>
            <li className="hero__list-item">WalkScore&reg;</li>
            <li className="hero__list-item">Neighborhood Photos</li>
          </ul>

          
          <h2 className="hero__call-to-action">Choose an area to begin</h2>

          <div className="hero__links-list-container">

           {this.state.neighborhoodsList.map(data => {
              return (
                <div className="hero__links-list-link-container" key={uuid()}>
                <Link to={`/results/${data.id}`} className="hero__links-list-link">{data.name}</Link></div>
              )
            })}

          </div>

        </div>
      </section>

    )
  }
}