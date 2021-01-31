import React from 'react';
// import { Link } from 'react-router-dom';

// Components import
import Header from '../../Components/Header/Header'
import PlaceHeading from '../../Components/PlaceHeading/PlaceHeading'
import WalkScore from '../../Components/WalkScore/WalkScore'
import Map from '../../Components/Map/Map'
import Photos from '../../Components/Photos/Photos'
import PropertyInfo from '../../Components/PropertyInfo/PropertyInfo'

// Images import
// import mapImage from '../../Assets/Images/sample_1.jpg'

// Styles import
import './Details.scss';

export default function Details() {
  document.title = "Details | StompingGround";

  const propertyData = 
    {
      id: 1183,
      address: "555 Jettison Avenue",
      city: "Toronto",
      province: "Ontario",
      image: "https://i.imgur.com/bRYsNY9.jpg"
    };

  return (
    <>
    <Header />

    <main className="details">

      <PlaceHeading heading={propertyData.address} subheading={`${propertyData.city}, ${propertyData.province}`} />

      <div className="details__property-info-container">
        <PropertyInfo data={propertyData} />
        <Map />
      </div>

      <div className="details__hr"></div>

      <div className="details__visuals-container">
        <WalkScore />
        <Photos mode="column" />
      </div>

    </main>

    </>
  )
}    