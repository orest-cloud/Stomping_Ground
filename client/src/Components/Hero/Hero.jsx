import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { v4 as uuid } from "uuid";

import AnimatedLogo from '../AnimatedLogo/AnimatedLogo'

import './Hero.scss';

export default class Hero extends Component {

  state = {
    neighborhoodsList: [
      {name: "Annex", id: "084c2b47-bdad"},
      {name: "Beaches", id: "252aa378-b1b4"},
      {name: "Cabbagetown", id: "f4dff8c0-b1b4"},
      {name: "Casa Loma", id: "0c17b802-b1b5"},
      {name: "Danforth", id: "14ecb6c6-b1b5"},
      {name: "Dufferin Grove", id: "20680064-b1b5"},
      {name: "Forest Hill", id: "2b0e7660-b1b5"},
      {name: "High Park", id: "36fde410-b1b5"},
      {name: "Kensington", id: "4cd0b10f-3ac3"},
      {name: "Lawrence Park", id: "5a884b56-df13"},
      {name: "Leslieville", id: "6c52f2fe-8e14"},
      {name: "Little Portugal", id: "30be68b0-77e7"},
      {name: "Parkdale", id: "835be8a8-ee34"},
      {name: "Regent Park", id: "c88b076b-47dd"},
      {name: "Roncesvalles", id: "2d06a38c-0e75"},
      {name: "Riverdale", id: "9bd61c4c-20d1"},
      {name: "Rosedale", id: "3d35b446-03b5"},
      {name: "Runnymede", id: "f2f2553a"},
      {name: "Swansea", id: "eccaa591-1c24"},
      {name: "Trinity-Bellwoods", id: "3cf60389-ed78"},
      {name: "University", id: "561a4fee-c1b9"},
      {name: "Willowdale", id: "0b83886e-37fb"},
      {name: "Wychwood", id: "7ddec4f6-cb26"},
      {name: "York University Heights", id: "a35336d3-06fd"}
    ],
    logoAnimationDone: false,
    logoMode: "static"
  }

  // heroMouseoverHandler = () => {
  //   if (this.state.logoAnimationDone === false) {
  //     this.setState({
  //       logoAnimationDone: true,
  //       logoMode: "animated"
  //     })
  //   }
  // }
  // onMouseOver={this.heroMouseoverHandler}

  render() {
    console.log('%c State before render:', "color: blue; font-weight: bold;");
    console.log(this.state);

    return (

      <section className="hero">
        <div className="hero__container" >
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