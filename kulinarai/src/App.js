import React from 'react'
import './App.css'
import Home from './components/Home/home'
import AboutUs from './components/AboutUs/aboutUs'
import Navbar from './components/NavBar/navBar'
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar/>
        <div className='links'>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/AboutUs">
              <AboutUs/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
};

export default App;
