import React from 'react'
import './App.css'
import Home from './components/Home/home'
import AboutUs from './components/AboutUs/aboutUs'
import Navbar from './components/NavBar/navBar'
import ContactUs from './components/ContactUs/contactUs'
import RecipePage from './components/RecipePage/recipePage'
import Footer from "./components/Footer/footer";
import RegistrationPage from "./components/Registration/registrationPage"
import LogInPage from "./components/LogIn/LogIn"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='App'>      
        <Navbar/>
        <div className='links'>
          <Routes>
            { /* route to Home page */}
            <Route path="/" element={<Home />} />
            { /* route to About us page page */}
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            { /* route to individual recipe page */}
            <Route path="/Recipe/:id" element={<RecipePage/>} />
            { /* route to Registration page */ }
            <Route absolute path="/RegistrationPage" element={<RegistrationPage/>} />
            { /* route to Log In page */ }
            <Route absolute path="/LogInPage" element={<LogInPage/>} />
          </Routes>
        </div> 
      </div>
      <Footer/>       
    </Router>
  )
};

export default App;
