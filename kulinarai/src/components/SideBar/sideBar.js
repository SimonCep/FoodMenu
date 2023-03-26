import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleToggle = () => setShowSidebar(!showSidebar);

  return (
    <>
      <Button variant="primary" className="d-md-none" onClick={handleToggle}>
        <span className="visually-hidden">Toggle navigation</span>
        <span className="navbar-toggler-icon" />
      </Button>

      <Offcanvas show={showSidebar} onHide={() => setShowSidebar(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="list-unstyled">
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;