import React, { Component, forwardRef } from "react";
import Heading from "./Heading";
import FoodForm from "./FoodForm";
import axios from "axios";
import { useState, useCallback} from "react";

export const Mainpage = () => {
  const [formData, setFormData] = useState({
    state: "",
    address: "",
    isSubmitted: false,
  });


 const [price, setPrice] = useState([])
  const handleClick = (e) => {
    
    // axios.get("localhost:3001/").then((res) => console.log(res.data));
  };
  const handleStateChange = (e) => {
    setFormData({ ...formData, state: e.target.value });
  };

  const handlePriceChange = e => {
    let arr = []
    if(!price.includes(e.target.name) && e.target.checked){
      arr = [...price, e.target.name]
    } else {
      arr = price.filter(a => a !== e.target.name)
    }
    setPrice(arr)
  };

  return (
    <div className="main">
      <Heading></Heading>
      <button onClick={(e) => handleClick(e)}>HELLO </button>
      <FoodForm
        handleStateChange={handleStateChange}
        handlePriceChange={handlePriceChange} d
        formData={formData}
      ></FoodForm>
    </div>
  );
};

export default Mainpage;
