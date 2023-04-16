import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">© 2023 Kulinarai</p>
        <ul className="footer-links">
          <li><a href="http://localhost:3000/">Home</a></li>
          <li><a href="http://localhost:3000/AboutUs">About Us</a></li>
          <li><a href="http://localhost:3000/ContactUs">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
