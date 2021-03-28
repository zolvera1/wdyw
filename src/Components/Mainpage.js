import React, { Component, forwardRef } from "react";
import Heading from "./Heading";
import FoodForm from "./FoodForm";
import axios from "axios";
import { useState, useCallback } from "react";
import Display from './Display'

export const Mainpage = () => {

  const [formData, setFormData] = useState({
    price: "",
    city: "",
    zip:1,
    state: "",
    address: "",
    addresstwo:'',
    radius: 1,
  });
  const [rest, setRest] = useState({});
  const [isSubmitted, setisSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/search", {
        data: formData,
      })
      .then((res) => {
        console.log(res);
        setRest(res.data)
      })
      .catch(e => {
        console.log("bello")
      }
      );
      setisSubmitted(true)
  };
  const handleAddressChange = (e) => {
    setFormData({ ...formData, address: e.target.value });
  };

 const handleAddressTwoChange = e => {
  setFormData({ ...formData, addresstwo: e.target.value });
 }
 const handleZipChange = e => {
  setFormData({ ...formData, zip: e.target.value });
 }
const handleCityChange = e => {
  setFormData({ ...formData, city: e.target.value });
}
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
    //yelp doesn't like arrays so...
    let priceStr  = arr.toString();
    setFormData({ ...formData, price: priceStr });
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
      {isSubmitted ? <Display restaurant={rest}/> : null}
      
    </div>
  );
};

export default Mainpage;
