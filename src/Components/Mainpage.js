import React, { Component, forwardRef } from "react";
import Heading from "./Heading";
import FoodForm from "./FoodForm";
import axios from "axios";
import { useState, useCallback} from "react";

export const Mainpage = () => {
  const [formData, setFormData] = useState({
    price:[],
    state: "",
    address: "",
    isSubmitted: false,
    radius: 1
  });
  const handleSubmit = e => {
    e.preventDefault()
    console.log(formData)
  }
  const handleAddressChange = e => {
    setFormData({ ...formData, address: e.target.value });
  }

  const handleClick = (e) => {
    console.log(formData.price)
    // axios.get("localhost:3001/").then((res) => console.log(res.data));
  };
  const handleStateChange = (e) => {
    setFormData({ ...formData, state: e.target.value });
  };

  const handlePriceChange = e => {
    const{price} = formData;
    let arr = []
    if(!price.includes(e.target.name) && e.target.checked){
      arr = [...price, e.target.name]
    } else {
      arr = price.filter(a => a !== e.target.name)
    }
    setFormData({...formData, price: arr})
  };
const handleRadiusChange = e => {
  setFormData({ ...formData, radius: e.target.value });
}
  return (
    <div className="main">
      <Heading></Heading>
      <button onClick={(e) => handleClick(e)}>HELLO </button>
      <FoodForm
        handleStateChange={handleStateChange}
        handlePriceChange={handlePriceChange} 
        handleRadiusChange={handleRadiusChange}
        handleAddressChange={handleAddressChange}
        handleSubmit = {handleSubmit}
        formData={formData}
      ></FoodForm>
    </div>
  );
};

export default Mainpage;
