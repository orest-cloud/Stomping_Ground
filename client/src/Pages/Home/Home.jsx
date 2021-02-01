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
      <img src={mapImage} alt="" className="info__image"/>

      <div className="info__column">
        <h2 className="info__heading">What is this?</h2>
        <p className="info__paragraph">Stomping Ground is the place to come when you’re looking for a place to call home. Immerse yourself in the world’s residential neighborhoods without the drive or the airfare.</p>
        <p className="info__paragraph">It’s a one-stop shop: choose a listing, check out its WalkScore&reg; details, and take a virtual stroll through the area by browsing real photos uploaded by neighborhood residents.</p>
      </div>

      <div className="info__column">
        <h2 className="info__heading">What's a WalkScore&reg;?</h2>
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
          <Link className="samples__image-link" to="/results"><img src={sample1} alt="A nice neighborhood" className="samples__image"/></Link>
          <Link className="samples__link" to="/results"><h3 className="samples__place-name">Bloor West Village</h3></Link>
          <p className="samples__place-description">Bloor West Village is a shopping district in Toronto, Ontario, Canada. Located along Bloor Street, it encompasses all businesses along Bloor Street between South Kingsway and Ellis Park Road, consisting of more than 400 shops, restaurants and services.</p>
        </div>

        <div className="samples__place">
          <Link className="samples__image-link" to="/results"><img src={sample2} alt="A nice neighborhood" className="samples__image"/></Link>
          <Link className="samples__link" to="/results"><h3 className="samples__place-name">The Junction</h3></Link>
          <p className="samples__place-description">The Junction is a neighbourhood in Toronto, Ontario, Canada, that is near the West Toronto Diamond, a junction of four railway lines in the area.</p>
        </div>

        <div className="samples__place">
          <Link className="samples__image-link" to="/results"><img src={sample3} alt="A nice neighborhood" className="samples__image"/></Link>
          <Link className="samples__link" to="/results"><h3 className="samples__place-name">Swansea</h3></Link>
          <p className="samples__place-description">Swansea is a neighbourhood in the city of Toronto, Ontario, Canada, bounded on the west by the Humber River, on the north by Bloor Street, on the east by High Park and on the south by Lake Ontario.</p>
        </div>

        <div className="samples__place">
          <Link className="samples__image-link" to="/results"><img src={sample4} alt="A nice neighborhood" className="samples__image"/></Link>
          <Link className="samples__link" to="/results"><h3 className="samples__place-name">Roncesvalles</h3></Link>
          <p className="samples__place-description">Roncesvalles is a neighbourhood in the city of Toronto, Ontario, Canada centred on Roncesvalles Avenue, a north-south street leading from the intersection of King and Queen Streets to the south, north to Dundas Street West, a distance of roughly 1.5 kilometres.</p>
        </div>

      </div>

    </section>



    </>
  )
}    