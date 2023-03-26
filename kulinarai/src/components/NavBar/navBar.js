import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './navBar.css';

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleToggle = () => setShowSidebar(!showSidebar);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Button variant="primary" onClick={handleToggle}>
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon" />
        </Button>
        <div className="mx-auto">
          <a className="navbar-brand" href="/" style={{ fontSize: '40px' }}>Kulinarai</a>
        </div>
      </nav>

      <Offcanvas show={showSidebar} onHide={() => setShowSidebar(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="sideHeader">Kulinarai. Receptai jums.</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="list-sidebar">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Navbar;