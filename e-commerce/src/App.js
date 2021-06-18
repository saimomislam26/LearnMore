import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../../node_modules/reactstrap/dist/reactstrap.js'
import Home from "./Home.js";
import About from './About.js';
import Contact from './Contact.js';
import Service from './Service.js'
import Navber from './Navbar.js';
import { Switch, Route, Redirect, Router } from 'react-router-dom';

const App = () => {
  return (
    <div >
      <Navber />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Service" component={Service} />
        <Redirect to="/" />
      </Switch>


    </div>
  );
}

export default App;
