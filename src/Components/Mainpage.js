import React, { Component, forwardRef } from "react";
import Heading from "./Heading";
import FoodForm from "./FoodForm";
import axios from "axios";
import { useState, useCallback } from "react";
import Display from "./Display";

export const Mainpage = () => {
  const [formData, setFormData] = useState({
    price:[],
    city: "",
    zip: '',
    state: "",
    address: "",
    addresstwo: "",
    radius: 5,
  });
  const [rest, setRest] = useState({});
  const [isSubmitted, setisSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
    
    const res = await axios.post("/search", {
        data: formData})
        
        
        setRest(res.data)

        setisSubmitted(true)
        
    }
    catch(e){
        console.log(e)
    }
   
  };
  const handleAddressChange = (e) => {
    setFormData({ ...formData, address: e.target.value });
  };

  const handleAddressTwoChange = (e) => {
    setFormData({ ...formData, addresstwo: e.target.value });
  };
  const handleZipChange = (e) => {
    setFormData({ ...formData, zip: e.target.value });
  };
  const handleCityChange = (e) => {
    setFormData({ ...formData, city: e.target.value });
  };
  const handleStateChange = (e) => {
    setFormData({ ...formData, state: e.target.value });
  };

  const handlePriceChange = (e) => {
    const { price } = formData;
    let arr = [];
    if (!price.includes(e.target.name) && e.target.checked) {
      arr = [...price, e.target.name];
    } else {
      arr = price.filter((a) => a !== e.target.name);
    }

    
    setFormData({ ...formData, price: arr });
    console.log(arr)
  };
  const handleRadiusChange = (e) => {
    setFormData({ ...formData, radius: e.target.value });
  };
  return (
    <div className="main">
      <Heading></Heading>
      
      {/* <button onClick={(e) => handleClick(e)}>HELLO </button> */}
      <FoodForm
        handleStateChange={handleStateChange}
        handleCityChange={handleCityChange}
        handleAddressTwoChange={handleAddressTwoChange}
        handleZipChange={handleZipChange}
        handlePriceChange={handlePriceChange}
        handleRadiusChange={handleRadiusChange}
        handleAddressChange={handleAddressChange}
        handleSubmit={handleSubmit}
        formData={formData}
      ></FoodForm>

      {isSubmitted ? <Display zoom={15} restaurant={rest} /> : null}
    </div>
  );
};

export default Mainpage;
