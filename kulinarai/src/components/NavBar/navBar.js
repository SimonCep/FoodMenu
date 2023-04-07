import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
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
            <div>
              <a href="/">Home</a>
            </div>
            <div>
              <a href="/AboutUs">About us</a>
            </div>
            <div>
              <a href="/ContactUs">Contact us</a>
            </div>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Navbar;