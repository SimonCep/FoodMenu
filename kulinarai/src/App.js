import React from 'react'
import './App.css'
import Home from './components/Home/home'
import AboutUs from './components/AboutUs/aboutUs'
import Navbar from './components/NavBar/navBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar/>
        <div className='links'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
};

export default App;
