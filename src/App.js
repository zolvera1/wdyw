import React from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from '../src/Components/Heading'
import FoodForm from '../src/Components/FoodForm'

function App() {
  return (
    <div className="App">
     <Heading></Heading>
     <FoodForm></FoodForm>
    </div>
  );
}

export default App;
