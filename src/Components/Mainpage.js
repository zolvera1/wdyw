import React, { Component } from 'react'
import Heading from './Heading'
import FoodForm from './FoodForm'
import axios from 'axios'
import {useState } from 'react'
export const Mainpage = () => {
    const [formData, setFormData] = useState({
      state:'',
      price: 0,
      address: '',
      isSubmitted: false
    })
    const handleClick = (e) => {
      axios.get('localhost:3001/').then(res => console.log(res.data))
    }
    const handleStateChange = e => {
      console.log(e.target.value)
      setFormData({...formData, state: e.target.value})
    }
    const handlePriceChange = e => {
      console.log(e.target.value)
      setFormData({...formData, price: e.target.value})
    }
    return (
        <div className="main">
        
        <Heading></Heading>
        <button onClick={e => handleClick(e)}>HELLO </button>
        <FoodForm 
        handleStateChange={handleStateChange} 
        handlePriceChange={handlePriceChange}
        formData={formData}>
       
        </FoodForm>

       </div>
     );
    
  }


export default Mainpage;
