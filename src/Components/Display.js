import React from 'react'
import Map from "./Map";
const dotenv = require("dotenv");
dotenv.config();
const google_key = process.env.REACT_APP_GOOGLE_KEY;
const Marker = (props) => {
  return <React.Fragment>{props.text}</React.Fragment>;
};
const Display = (props) => {
  return (
    <div className="map">

     <Map zoom={props.zoom} location={props.restaurant}></Map>
    </div>
  );
};
export default Display;
