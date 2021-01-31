import React from 'react';
import {Link} from 'react-router-dom';

import './ResultsRow.scss';

import propertyImage from '../../Assets/Images/sample_3.jpg'

export default function ResultsRow({id, address, city, province}) {

  const link = "/details";

  return (

    <div className="results-row">
      <Link to={link} className="results-row__image-link">
        <img src={propertyImage} alt="Property" className="results-row__image"/>
      </Link>

      <div className="results-row__data-container">
        <Link to={link} className="results-row__link"><h4 className="results-row__address">{address}</h4></Link>
        <p className="results-row__place">{city}, {province}</p>

        <Link to={link} className="results-row__details-link"><p className="results-row__details">Details</p></Link>
      </div>

    </div>

  )
}