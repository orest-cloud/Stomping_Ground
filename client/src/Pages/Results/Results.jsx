import React from 'react';
// import { Link } from 'react-router-dom';

// Components import
import Header from '../../Components/Header/Header'
import PlaceHeading from '../../Components/PlaceHeading/PlaceHeading'
import WalkScore from '../../Components/WalkScore/WalkScore'
import Map from '../../Components/Map/Map'
import ResultsRows from '../../Components/ResultsRows/ResultsRows'
import Photos from '../../Components/Photos/Photos'

// Images import
// import mapImage from '../../Assets/Images/generic_map.jpg'

// Styles import
import './Results.scss';

export default function Results() {
  document.title = "Search Results | StompingGround";

  const placeheading = {
   streetname: "593 Annette St.",
   subheading: "In the neighborhood of Bloor West"
  };

  const resultsData = [
    {
      id: 1,
      address: "555 Jettison Avenue",
      city: "Toronto",
      province: "Ontario"
    },
    {
      id: 2,
      address: "555 Jettison Avenue",
      city: "Toronto",
      province: "Ontario"
    },
    {
      id: 3,
      address: "555 Jettison Avenue",
      city: "Toronto",
      province: "Ontario"
    }     
  ];


  return (
    <>
    <Header />

    <main className="results">

      <PlaceHeading heading={placeheading.streetname} subheading={placeheading.subheading} hood={placeheading.hood} />

      <div className="results__visuals-container">
        <WalkScore />
        <Map />
      </div>

      <ResultsRows data={resultsData} />

    </main>

    <Photos mode="row" />

    </>
  )
}    