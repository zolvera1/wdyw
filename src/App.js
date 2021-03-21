import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom'
import './App.css';
import Heading from '../src/Components/Heading'
import FoodForm from '../src/Components/FoodForm'
import Mainpage from './Components/Mainpage';
import NotFound from '../src/Components/NotFound'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/">
        <Mainpage/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
