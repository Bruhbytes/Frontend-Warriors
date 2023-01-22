import './App.css';
//import Login from './Login';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contactus from "./pages/Contactus.js"
import React, { Component }  from 'react';
import Home2 from './pages/Home2';
function App() {
  return (
    <>
    <div className="app content">
      <div>
        <NavBar></NavBar>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home/> 
            </Route>
            <Route path="/about">
              <About/> 
            </Route>
            <Route exact path="/contactUs">
              <Contactus/> 
            </Route>
            <Route exact path="/home2">
              <Home2/> 
            </Route>
            
          </Switch>
        </Router>
       
       </div>
       
      </div>
   
  </>
  );
}

export default App;