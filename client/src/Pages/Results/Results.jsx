import React, { Component } from 'react';
import Axios from 'axios';
// import { Link } from 'react-router-dom';

// Components import
import Header from '../../Components/Header/Header'
import PlaceHeading from '../../Components/PlaceHeading/PlaceHeading'
import WalkScore from '../../Components/WalkScore/WalkScore'
import Map from '../../Components/Map/Map'
import ResultsRows from '../../Components/ResultsRows/ResultsRows'
import ScreenLoader from '../../Components/ScreenLoader/ScreenLoader'
import Photos from '../../Components/Photos/Photos'

// Images import
// import mapImage from '../../Assets/Images/generic_map.jpg'

// Styles import
import './Results.scss';

// Set up server endpoint
var apiURL;
// If in development mode, use localhost endpoint
if (process.env.NODE_ENV === 'development') {
  apiURL = `${process.env.REACT_APP_HOST_URL_LOCAL}place/`;
} else {
  apiURL = `${process.env.REACT_APP_HEROKU_URL}:${process.env.PORT}/place/`;
}

console.log('%c Results.jsx apiURL is ', "color: purple; font-weight: bold;");
	console.log(apiURL);


export default class Results extends Component {


  // apiURL = 'http://localhost:5000/place/';
  currentAreaID = this.props.match.params.id;

  state = {
    neighborhoodData: null,
    propertiesData: null,
    photosData: null
  }

  componentDidMount() {

      this.apiFetchCall(this.currentAreaID);
  }

  apiFetchCall = (currentAreaID) => {
    console.log('%c ', "color: green; font-weight: bold;");
	  console.log(`apiFetchcall intiated with id ${currentAreaID}`);
	  console.log(`${apiURL}${currentAreaID}`);
    
    Axios
        .get(`${apiURL}${currentAreaID}`, { params: { limit: 15 }})
        .then((res) => {

            this.setState({
              neighborhoodData: res.data[0],
              propertiesData: res.data[1],
              photosData: res.data[2]
            });
        })
        .catch((err) => console.log(err));
  }      

  render() {
    document.title = `Results | ${process.env.REACT_APP_SITE_NAME}`;

    // If Axios data for the state is not loaded, return null
    if ((!this.state.neighborhoodData) || (!this.state.propertiesData) || (!this.state.photosData)) {

      return (
        <>
        <Header />
        <main className="results">
          <div className="results__content-container">
            <ScreenLoader />
          </div>
        </main>
        </>
        )
      } else {
      
      // Set page title with neighborhood name
      document.title = `${this.state.neighborhoodData.name} | ${process.env.REACT_APP_SITE_NAME}`;
    }


    return (
      <>
      <Header />
  
      <main className="results">
        <div className="results__content-container">

          <PlaceHeading heading={this.state.neighborhoodData.name} subheading={this.state.neighborhoodData.description} hood="" hoodLink="" />
    
          <div className="results__visuals-container">
            <WalkScore address={this.state.neighborhoodData.address} />
            <Map mode="pin" query={this.state.neighborhoodData.queryname} />
          </div>
    
          <ResultsRows data={this.state.propertiesData} />

        </div>
      </main>
  
      <Photos mode="row" data={this.state.photosData} />
  
      </>
    )
  }
}    