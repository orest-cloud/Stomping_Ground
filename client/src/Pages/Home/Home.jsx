import React from 'react';
import { Link } from 'react-router-dom';

// Components import
import Header from '../../Components/Header/Header'
import Hero from '../../Components/Hero/Hero'

// Images import
import mapImage from '../../Assets/Images/generic_map.jpg'
import sample1 from '../../Assets/Images/sample_1.jpg'
import sample2 from '../../Assets/Images/sample_2.jpg'
import sample3 from '../../Assets/Images/sample_3.jpg'
import sample4 from '../../Assets/Images/sample_4.jpg'

// Styles import
import './Home.scss';

export default function Home() {
  document.title = "StompingGround | Properties with liveability data";

  return (
    <>
    <Header />
    <Hero />

    <section className="info">
      <div className="info__content-container">
        <img src={mapImage} alt="" className="info__image"/>

        <div className="info__column">
          <h2 className="info__heading">What is this?</h2>
          <p className="info__paragraph">"Stomping Ground is the place to come when you’re looking for a place in Toronto to call home. Immerse yourself in the city’s residential neighborhoods without the drive or the airfare.</p>
          <p className="info__paragraph">It’s a one-stop shop: choose a listing, check out its WalkScore&reg; details, and take a virtual stroll through the area by browsing real, unretouched photos uploaded by users like you.</p>
        </div>

        <div className="info__column">
          <h2 className="info__heading info__heading--space-above">What's a WalkScore&reg;?</h2>
          <p className="info__paragraph">A neighbourhood’s WalkScore&reg; is a numerical index rating the “walkability” of an area—how pedestrian-friendly it is.</p>
          <p className="info__paragraph">The WalkScore&reg; data estimates how many errands you can run on foot in a given neighbourhood, and it also indexes the availability of public transit and the amount of bike lanes and hills for cyclists.</p>
        </div>
      </div>
    </section>
    
    
    <section className="samples">
      <div className="samples__content-container">
        <h2 className="samples__heading">Sample Neighborhoods</h2>
        <h3 className="samples__sub-heading">Jump to some interesting places!</h3>

        <div className="samples__places-container">

          <div className="samples__place">
            <Link className="samples__image-link" to="/results/5a884b56-df13
"><img src={sample1} alt="A nice neighborhood" className="samples__image"/></Link>
            <Link className="samples__link" to="/results/5a884b56-df13
"><h3 className="samples__place-name">Lawrence Park</h3></Link>
            <p className="samples__place-description">
            Lawrence Park was one of Toronto's first planned garden suburbs. Many of the residents belong to The Granite Club, a sports and recreation centre on Bayview Avenue north of Lawrence Avenue.
            </p>
          </div>

          <div className="samples__place">
            <Link className="samples__image-link" to="/results/a35336d3-06fd
"><img src={sample2} alt="A nice neighborhood" className="samples__image"/></Link>
            <Link className="samples__link" to="/results/a35336d3-06fd
"><h3 className="samples__place-name">York University Heights</h3></Link>
            <p className="samples__place-description">
            York University Heights, also known as Northwood Park, is a large, multicultural area home to the main York University campus, with the Aviva Centre tennis complex and a shopping mall.
            </p>
          </div>

          <div className="samples__place">
            <Link className="samples__image-link" to="/results/eccaa591-1c24"><img src={sample3} alt="A nice neighborhood" className="samples__image"/></Link>
            <Link className="samples__link" to="/results/eccaa591-1c24"><h3 className="samples__place-name">Swansea</h3></Link>
            <p className="samples__place-description">Swansea is a neighbourhood in the city of Toronto, Ontario, Canada, bounded on the west by the Humber River, on the north by Bloor Street, on the east by High Park and on the south by Lake Ontario.</p>
          </div>

          <div className="samples__place">
            <Link className="samples__image-link" to="/results/2d06a38c-0e75"><img src={sample4} alt="A nice neighborhood" className="samples__image"/></Link>
            <Link className="samples__link" to="/results/2d06a38c-0e75"><h3 className="samples__place-name">Roncesvalles</h3></Link>
            <p className="samples__place-description">Roncesvalles is a neighbourhood in the city of Toronto, Ontario, Canada centred on Roncesvalles Avenue, a north-south street leading from the intersection of King and Queen Streets to the south, north to Dundas Street West, a distance of roughly 1.5 kilometres.</p>
          </div>

        </div>
      </div>
    </section>


    </>
  )
}    