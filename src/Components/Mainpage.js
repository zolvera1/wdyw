import React, { Component } from 'react'
import Heading from './Heading'
import FoodForm from './FoodForm'

export const Mainpage = () => {
    const handleChange = e => {

    }
    return (
        <div className="main">
        
        <Heading></Heading>
        <button onClick={e => console.log(process.env.REACT_APP_CLIENT_ID)}>HELLO </button>
        
       {//PASS FORM VALUES AS PROPS AND HAVE FORM LOGIC IN HERE
       } 
       </div>
     );
    
}


export default Mainpage;
