import React, { Component } from 'react';
import Axios from 'axios';
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

export default class Results extends Component {

  // API calls setup
  apiURL = 'http://localhost:8080/place/';
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
    Axios
        .get(`${this.apiURL}${currentAreaID}`, { params: { name: this.state.address, limit: 15 }})
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
    document.title = "Results | StompingGround";

    // Returns a blank area until Axios data for the state is loaded
    if ((!this.state.neighborhoodData) || (!this.state.propertiesData) || (!this.state.photosData)) {
      return (
        <Header />
        )
      } else {
      document.title = `${this.state.neighborhoodData.name} | StompingGround`;
    }

    return (
      <>
      <Header />
  
      <main className="results">
  
        <PlaceHeading heading={this.state.neighborhoodData.name} subheading={this.state.neighborhoodData.location.postalcode} />
  
        <div className="results__visuals-container">
          <WalkScore/>
          <Map mode="centre" latitude={this.state.neighborhoodData.location.latitude}  longitude={this.state.neighborhoodData.location.longitude} />
        </div>
  
        <ResultsRows data={this.state.propertiesData} />
  
      </main>
  
      <Photos mode="row" data={this.state.photosData} />
  
      </>
    )
  }
}    