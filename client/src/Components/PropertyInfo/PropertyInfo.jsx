import React from 'react';

import './PropertyInfo.scss';

export default function PropertyInfo(props) {

  return (

    <section className="property-info">
      <img src={props.data.image} alt="Property" className="property-info__image"/>

      <h4 className="property-info__label">History</h4>
      <p className="property-info__data">{props.data.id}</p>
      
      <h4 className="property-info__label">Address</h4>
      <p className="property-info__data">{props.data.address}</p>

      <h4 className="property-info__label">City</h4>
      <p className="property-info__data">{props.data.city}</p>

      <h4 className="property-info__label">Province</h4>
      <p className="property-info__data">{props.data.province}</p>
      
    </section>

  )
}