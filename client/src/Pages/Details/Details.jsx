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

// Images import
// import mapImage from '../../Assets/Images/sample_1.jpg'

// Styles import
import './Details.scss';


export default class Details extends Component {

  // API calls setup
  apiURL = 'http://localhost:8080/property/';
  currentID = this.props.match.params.id;

  state = {
    mapData: null,
    neighborhoodData: null,
    photosData: null,
    propertiesData: null
  }

  componentDidMount() {
    this.apiFetchCall(this.currentID);
  }

  apiFetchCall = (currentID) => {
    Axios
        .get(`${this.apiURL}${currentID}`)
        .then((res) => {
          console.log('%c Axios response:', "color: red; font-weight: bold;");
          console.log(res);

            this.setState({
              propertiesData: res.data
            });
        })
        .catch((err) => console.log(err));
  }   


  render() {
    document.title = "Details | StompingGround";

    // Returns a blank area until Axios data for the state is loaded
    if (!this.state.propertiesData) {
      return (
        <Header />
      )
    }    

    return (
      <>
      <Header />

      <main className="details">

        <PlaceHeading heading={this.state.propertiesData.Property.AddressText} subheading={`In the neighborhood of ${this.state.propertiesData.neighborhoodname}`} />

        <div className="details__property-info-container">
          <PropertyInfo data={this.state.propertiesData} />
          <Map mode="pin" query={this.state.propertiesData.Property.AddressText}  />
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
}    