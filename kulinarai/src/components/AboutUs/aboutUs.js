import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import './aboutUs.css'

function AboutUs() {
  return (
    <Container className='AboutUs'>
      <h1 className='about-header'>About Us</h1>
      <p className='for-paragraph'>
        The website was created by the students of Kaunas University of Technology.
        They are all studying in informatics engineering and belong to IFIN-1/3.
        Their names are: Simas Čeponis, Justas Bujko, Tadas Lekerauskas. This website was created using
        agile methodology. Every member of the team has a few roles. Here is the information about us:
      </p>
      <Row>
        <Col className='person' md={4}>
          <Image className='profile-pic' src={require('../../images/Simas.jpg')} />
          <h3 className='person-name'>Simas Čeponis</h3>
          <p>Roles: programmer, team leader</p>
          <p>E-Mail: simas.ceponis@ktu.edu</p>
        </Col>
        <Col className='person' md={4}>
          <Image className='profile-pic' src={require('../../images/Justas.png')} />
          <h3 className='person-name'>Justas Bujko</h3>
          <p>Roles: programmer, product leader</p>
          <p>E-Mail: justas.bujko@ktu.edu</p>
        </Col>
        <Col className='person' md={4}>
          <Image className='profile-pic' src={require('../../images/Tadas.jpg')} />
          <h3 className='person-name'>Tadas Lekerauskas</h3>
          <p>Roles: programmer, designer</p>
          <p>E-Mail: tadas.lekerauskas@ktu.edu</p>
        </Col>
      </Row>
    </Container>
  )
};

export default AboutUs;
