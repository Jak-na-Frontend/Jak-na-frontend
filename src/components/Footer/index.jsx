import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <p className="footer__text">Digitální akademie WEB - Czechitas 2021</p>
    <Link to="/About" className="footer__link">
      <p className="footer__link">O projektu & kontakt</p>
    </Link>
  </footer>
);

export default Footer;
