import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../Components/Header/Header'
import Hero from '../../Components/Hero/Hero'

import mapImage from '../../Assets/Images/generic_map.jpg'
import sample1 from '../../Assets/Images/sample_1.jpg'
import sample2 from '../../Assets/Images/sample_2.jpg'
import sample3 from '../../Assets/Images/sample_3.jpg'
import sample4 from '../../Assets/Images/sample_4.jpg'

import './Home.scss';

export default function Home() {
  return (
    <>
    <Header />
    <Hero />

    <section className="info">
      <img src={mapImage} alt="" className="info__image"/>

      <div className="info__column">
        <h2 className="info__heading">What is this?</h2>
        <p className="info__paragraph">Get information on WalkScore in your desired neighborhood!</p>
        <p className="info__paragraph">Franzen cred fam af irony gastropub. Tacos cold-pressed shoreditch PBR&B, VHS food truck paleo letterpress. Small batch salvia cornhole 90's gluten-free, adaptogen</p>
        <p className="info__paragraph">Waistcoat asymmetrical bicycle rights twee aesthetic fam typewriter. Fam pinterest tousled salvia shabby chic fixie coloring book single-origin coffee</p>
      </div>

      <div className="info__column">
        <h2 className="info__heading">What's a WalkScore?</h2>
        <p className="info__paragraph">Get information on WalkScore in your desired neighborhood!</p>
        <p className="info__paragraph">Franzen cred fam af irony gastropub. Tacos cold-pressed shoreditch PBR&B, VHS food truck paleo letterpress. Small batch salvia cornhole 90's gluten-free, adaptogen</p>
        <p className="info__paragraph">Waistcoat asymmetrical bicycle rights twee aesthetic fam typewriter. Fam pinterest tousled salvia shabby chic fixie coloring book single-origin coffee</p>
      </div>
    </section>

    <section className="samples">
      <h2 className="samples__heading">Sample Neighborhoods</h2>
      <h3 className="samples__sub-heading">Jump to some interesting places!</h3>

      <div className="samples__places-container">

      <div className="samples__place">
          <Link className="samples__image-link"><img src={sample1} alt="A nice neighborhood" className="samples__image"/></Link>
          <Link className="samples__link"><h3 className="samples__place-name">Brooklyn, New York City</h3></Link>
          <p className="samples__place-description">air plant, palo santo copper mug cronut snackwave iPhone la croix dreamcatcher hot chicken knausgaard chambray flexitarian migas.</p>
        </div>

        <div className="samples__place">
          <Link className="samples__image-link"><img src={sample2} alt="A nice neighborhood" className="samples__image"/></Link>
          <Link className="samples__link"><h3 className="samples__place-name">Brooklyn, New York City</h3></Link>
          <p className="samples__place-description">air plant, palo santo copper mug cronut snackwave iPhone la croix dreamcatcher hot chicken knausgaard chambray flexitarian migas.</p>
        </div>

        <div className="samples__place">
          <Link className="samples__image-link"><img src={sample3} alt="A nice neighborhood" className="samples__image"/></Link>
          <Link className="samples__link"><h3 className="samples__place-name">Brooklyn, New York City</h3></Link>
          <p className="samples__place-description">air plant, palo santo copper mug cronut snackwave iPhone la croix dreamcatcher hot chicken knausgaard chambray flexitarian migas.</p>
        </div>

        <div className="samples__place">
          <Link className="samples__image-link"><img src={sample4} alt="A nice neighborhood" className="samples__image"/></Link>
          <Link className="samples__link"><h3 className="samples__place-name">Brooklyn, New York City</h3></Link>
          <p className="samples__place-description">air plant, palo santo copper mug cronut snackwave iPhone la croix dreamcatcher hot chicken knausgaard chambray flexitarian migas.</p>
        </div>

      </div>

    </section>



    </>
  )
}    