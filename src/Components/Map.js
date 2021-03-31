import React from "react";
import GoogleMapReact from "google-map-react";
import "../CSS/map.css";
import {faMapPin} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const dotenv = require("dotenv");
dotenv.config();

const google_key = process.env.REACT_APP_GOOGLE_KEY;

const LocationPin = ({ text }) => (
  <div className="pin">
    <FontAwesomeIcon style={{color:"red"}} icon={faMapPin} size="3x"></FontAwesomeIcon>
    <p className="pin-text">{text}</p>
  </div>
);

const Map = ({ location, zoom }) => {
  
  
  const center = {
    lat: location.coordinates.latitude,
    lng: location.coordinates.longitude,
  };
  return (
    <div className="map">
      <h2 className="map-h2">Come Visit Us At Our Campus</h2>

      <div className="google-map">
        <GoogleMapReact
        
          bootstrapURLKeys={{ key: google_key }}
          center={center}
          zoom={zoom}
        >
         
          <LocationPin
            lat={location.coordinates.latitude}
            lng={location.coordinates.longitude}
            text={location.name}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
