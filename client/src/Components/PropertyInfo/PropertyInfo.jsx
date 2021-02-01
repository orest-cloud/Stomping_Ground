import React from 'react';

import './PropertyInfo.scss';

export default function PropertyInfo(props) {

  // const link = `/details/${props.data.Id}`;
  // const address = props.data.Property.AddressText;
  const image = props.data.Property.image;
  const type = props.data.Building.Type;
  const price = props.data.Property.Price;
  const bedrooms = props.data.Building.Bedrooms;
  const bathrooms = props.data.Building.BathroomTotal;
  const parking = props.data.Property.parking;
  const totalSize = props.data.Property.SizeTotal;
  const contact = props.data.Contact.Name;
  const phone = props.data.Contact.PhoneNumber;
  const remarks = props.data.PublicRemarks;

  return (

    <section className="property-info">
      <img src={image} alt="Property" className="property-info__image"/>

      <div className="property-info__data-container">
        <div className="property-info__data-column">
          <h4 className="property-info__label">Type</h4>
          <p className="property-info__data">{type}</p>
          
          <h4 className="property-info__label">Price</h4>
          <p className="property-info__data">{price}</p>

          <h4 className="property-info__label">Bedrooms</h4>
          <p className="property-info__data">{bedrooms}</p>

          <h4 className="property-info__label">Bathrooms</h4>
          <p className="property-info__data">{bathrooms}</p>
        </div>

        <div className="property-info__data-column">
          <h4 className="property-info__label">Contact</h4>
          <p className="property-info__data">{contact}</p>
          
          <h4 className="property-info__label">Phone</h4>
          <p className="property-info__data">{phone}</p>

          <h4 className="property-info__label">Total Size</h4>
          <p className="property-info__data">{totalSize}</p>

          <h4 className="property-info__label">Bathrooms</h4>
          <p className="property-info__data">{parking}</p>
        </div>
      </div>

      <div className="property-info__data-container">
        <p className="property-info__remarks">{remarks}</p>
      </div>
      
    </section>

  )
}