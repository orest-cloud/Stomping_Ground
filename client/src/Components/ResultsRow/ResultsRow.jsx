import React from 'react';
import {Link} from 'react-router-dom';

import './ResultsRow.scss';

// import propertyImage from '../../Assets/Images/sample_3.jpg'

export default function ResultsRow(props) {

  const link = `/details/${props.data.Id}`;
  const address = props.data.AddressText;
  const image = `/assets/images/properties/${props.data.image}`;
  const type = props.data.Type;
  const price = props.data.Price;
  const bedrooms = props.data.Bedrooms;
  const bathrooms = props.data.Bathrooms;
  const parking = props.data.Parking;
  const totalSize = props.data.SizeTotal;

  return (

    <div className="results-row">
      <Link to={link} className="results-row__image-link">
        <img src={image} alt="Property" className="results-row__image"/>
      </Link>

      <div className="results-row__data-container">
        <Link to={link} className="results-row__link"><h4 className="results-row__address">{address}</h4></Link>

        <div className="results-row__data-container-grid">
          <p className="results-row__paragraph">Type: {type}</p>
          <p className="results-row__paragraph">Price: {price}</p>
          <p className="results-row__paragraph">Bedrooms: {bedrooms}</p>
          <p className="results-row__paragraph">Bathrooms: {bathrooms}</p>
          <p className="results-row__paragraph">Parking: {parking}</p>
          <p className="results-row__paragraph">Total size: {totalSize}</p>
        </div>

      </div>

      <Link to={link} className="results-row__details-link"><p className="results-row__details">Details</p></Link>

    </div>

  )
}