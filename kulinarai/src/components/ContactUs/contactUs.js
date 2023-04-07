import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import './contactUs.css'

function ContactUs() {
  return (
    <Container className='contactUs'>
      <h1 className='contact-header'>Get in touch</h1>
      <p className='for-paragraph'>
        Whether you have any question, would like to provide feedback or just want to say hi, feel free to contact us.
      </p>
      <Row>
        <Col className='contact' md={4}>
          <Image className='contact-pic' src={require('../../images/call.png')} />
          <h3 className='contact-name'>Contact by calling us</h3>
          <p>Phone number: +370 11111111</p>
          <p>Phone number: +370 22222222</p>          
        </Col>
        <Col className='contact' md={4}>
          <Image className='contact-pic' src={require('../../images/location.png')} />
          <h3 className='contact-name'>Our Office</h3>
          <p>Address: Kaunas University of Technology, Studentų g. 50, 51368 Kaunas</p>
          <Image className='map-pic' src={require('../../images/ktu_map.png')} />
        </Col>
        <Col className='contact' md={4}>
          <Image className='contact-pic' src={require('../../images/email.png')} />
          <h3 className='contact-name'>Write us an email</h3>          
          <p>E-Mail: tadas.lekerauskas@ktu.edu</p>
          <p>E-Mail: justas.bujko@ktu.edu</p>
          <p>E-Mail: simas.ceponis@ktu.edu</p>
        </Col>
      </Row>
    </Container>
  )
};

export default ContactUs;
