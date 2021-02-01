import React from 'react';
import {Link} from 'react-router-dom';

import './ResultsRow.scss';

// import propertyImage from '../../Assets/Images/sample_3.jpg'

export default function ResultsRow(props) {

  const link = `/details/${props.data.Id}`;
  const address = props.data.Property.AddressText;
  const image = props.data.Property.image;
  const type = props.data.Building.Type;
  const price = props.data.Property.Price;
  const bedrooms = props.data.Building.Bedrooms;
  const bathrooms = props.data.Building.BathroomTotal;
  const parking = props.data.Property.parking;
  const totalSize = props.data.Property.SizeTotal;

  return (

    <div className="results-row">
      <Link to={link} className="results-row__image-link">
        <img src={image} alt="Property" className="results-row__image"/>
      </Link>

      <div className="results-row__data-container">
        <Link to={link} className="results-row__link"><h4 className="results-row__address">{address}</h4></Link>
        <p className="results-row__paragraph"><span className="results-row__paragraph-span">Type: {type}</span>Price: {price}</p>
        <p className="results-row__paragraph"><span className="results-row__paragraph-span">Bedrooms: {bedrooms}</span>Bathrooms: {bathrooms}</p>
        <p className="results-row__paragraph"><span className="results-row__paragraph-span">Parking: {parking}</span>Total size: {totalSize}</p>

      </div>

        <Link to={link} className="results-row__details-link"><p className="results-row__details">Details</p></Link>

    </div>

  )
}