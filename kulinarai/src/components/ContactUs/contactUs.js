import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import './contactUs.css'

function ContactUs() {
  return (
    <Container className='contactUs'>
      <h1 className='contact-header'>Get in touch</h1>
      <p className='for-paragraph'>
        Whether you have any question, would like to provide feedback or just want to say hi, feel free to contact.
      </p>
      <Row>
        <Col className='contact' md={4}>
          <Image className='contact-pic' src={require('../../images/call.png')} />
          <h3 className='contact-name'>Contact by calling</h3>
          <p>Phone number: +370 11111111</p>         
        </Col>
        <Col className='contact' md={4}>
          <Image className='contact-pic' src={require('../../images/location.png')} />
          <h3 className='contact-name'>Office</h3>
          <p>Address: Kaunas University of Technology, Studentų g. 50, 51368 Kaunas</p>
          <Image className='map-pic' src={require('../../images/ktu_map.png')} />
        </Col>
        <Col className='contact' md={4}>
          <Image className='contact-pic' src={require('../../images/email.png')} />
          <h3 className='contact-name'>Write an email</h3>          
          <p>E-Mail: simas.ceponis@gmail.com</p>
        </Col>
      </Row>
    </Container>
  )
};

export default ContactUs;
