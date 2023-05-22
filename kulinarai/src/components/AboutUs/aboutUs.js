import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import './aboutUs.css'

function AboutUs() {
  return (
    <Container className='AboutUs'>
      <h1 className='about-header'>About Us</h1>
      <p className='for-paragraph'>
        The website was created by a student of Kaunas University of Technology.
        Here is some information about me:
      </p>
      <Row>
        <Col className='person' md={4} >
          <Image className='profile-pic' src={require('../../images/Simas.jpg')} />
          <h3 className='person-name'>Simas Čeponis</h3>
          <p>Roles: Software engineerer</p>
          <p>E-Mail: simas.ceponis@gmail.com</p>
        </Col>
      </Row>
    </Container>
  )
};

export default AboutUs;
