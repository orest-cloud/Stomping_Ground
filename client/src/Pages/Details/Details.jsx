import React, { Component } from 'react';
import Axios from 'axios';
// import { Link } from 'react-router-dom';

// Components import
import Header from '../../Components/Header/Header'
import PlaceHeading from '../../Components/PlaceHeading/PlaceHeading'
import WalkScore from '../../Components/WalkScore/WalkScore'
import Map from '../../Components/Map/Map'
import Photos from '../../Components/Photos/Photos'
import PropertyInfo from '../../Components/PropertyInfo/PropertyInfo'
import ScreenLoader from '../../Components/ScreenLoader/ScreenLoader'

// Images import
// import mapImage from '../../Assets/Images/sample_1.jpg'

// Styles import
import './Details.scss';

// Set up server endpoint
var apiURL;
// If in development mode, use localhost endpoint
if (process.env.NODE_ENV === 'development') {
  apiURL = `${process.env.REACT_APP_HOST_URL_LOCAL}property/`;
} else {
  apiURL = `${process.env.REACT_APP_HOST_URL}property/`;
}


export default class Details extends Component {

  currentID = this.props.match.params.id;

  state = {
    neighborhoodData: null,
    propertiesData: null,
    photosData: null
  }

  componentDidMount() {
    this.apiFetchCall(this.currentID);
  }

  apiFetchCall = (currentID) => {
    Axios
        .get(`${apiURL}${currentID}`, { params: { limit: 15 }})
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
    document.title = `Details | ${process.env.REACT_APP_SITE_NAME}`;

    // Returns a blank area until Axios data for the state is loaded
    if ((!this.state.neighborhoodData) || (!this.state.propertiesData) || (!this.state.photosData)) {
      return (
        <>
        <Header />
        <main className="details">
          <div className="details__content-container">
            <ScreenLoader />
          </div>
        </main>
        </>
      )
    } else {
      document.title = `${this.state.propertiesData.AddressText} | ${process.env.REACT_APP_SITE_NAME}`;
    }

    return (
      

      <>
      <Header />

      <main className="details">
        <div className="details__content-container">
          <PlaceHeading heading={this.state.propertiesData.AddressText} subheading="In the neighborhood of " hood={this.state.propertiesData.neighborhoodname} hoodLink={this.state.propertiesData.neighborhood} />

          <div className="details__property-info-container">
            <PropertyInfo data={this.state.propertiesData} />
            <Map mode="pin" query={this.state.propertiesData.AddressText}  />
          </div>

          <p className="details__remarks">{this.state.propertiesData.PublicRemarks}</p>

          <div className="details__hr"></div>

        </div>
      </main>

      <div className="details__apis">
        <div className="details__apis-container">
          <div className="details__apis-walkscore-container">
            <WalkScore address={this.state.propertiesData.AddressText} />
          </div>
          <Photos mode="column" data={this.state.photosData} />
        </div>
      </div>

      </>
    )
  }
}    