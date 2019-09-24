import React, { Component } from "react";

import "./styles.css";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const API_KEY = process.env.REACT_APP_GOOGLEMAP_API_KEY;

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: []
    }
  }
  
 // When component is first loaded to the page
  componentDidMount(){
    fetch('/react-interview/getLowesStores')
    .then(res => res.json())
    .then(data => {
      this.setState({ markers: data });
      console.log(this.state.markers);
      this.createMarkers(this.state.markers);
    })
  }

  // Add store markers for each location based on latitude and longitude
  createMarkers(marks){
    marks.forEach(element => {
      this.element = new Marker({
        position: {
          lat: element.geometry.location.lat,
          lng: element.geometry.location.lat
        }
    });
  })};
  
  render() {
    return (
      <Map google={this.props.google} zoom={10} initialCenter={{ lat: 35.5849652, lng: -80.824421 }}>
        {this.state.markers.map(mark => {
          return (
            <Marker 
                key={mark.number}
                name={mark.name}
                onClick={this.mark}
                position={{lat: mark.geometry.location.lat, lng: mark.geometry.location.lng}}
            >
            </Marker>
            )}
          )
        }
        </Map>
        
        ) 
      }
};


export default GoogleApiWrapper({
  apiKey: (API_KEY)
})(MapContainer)









