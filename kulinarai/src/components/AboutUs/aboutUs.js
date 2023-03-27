import React from 'react'
import './aboutUs.css'
import Image from 'react-bootstrap/Image'

function AboutUs() {
  return (
    <div className='AboutUs'>
      <h1>About Us</h1>
      <p className='for-paragraph'>
        The website was created by the students of Kaunas Uiversity of Technology.
        They are all studying in informatics engineering and belong to IFIN-1/3.
        Their names are: Simas Čeponis, Justas Bujko, Tadas Lekerauskas. This website was created using
        agile methodology. Every member of the team has a few roles. Here is the information about us:<br/>
        Simas Čeponis:<br/>
        Roles: programmer, team leader <br/>
        E-Mail: simas.ceponis@ktu.edu <br/>
        <img src={require('../../images/Simas.jpg')}/> <br/> <br/>
        Justas Bujko:<br/>
        Roles: programmer, product leader <br/>
        E-Mail: justas.bujko@ktu.edu <br/>
        <img src={require('../../images/Justas.jpg')}/> <br/> <br/>
        Tadas Lekerauskas:<br/> 
        Roles: programmer, designer <br/>
        E-Mail: tadas.lekerauskas@ktu.edu <br/>
        <img src={require('../../images/Tadas.jpg')}/> <br/>
      </p>

    </div>
  )
};

export default AboutUs;