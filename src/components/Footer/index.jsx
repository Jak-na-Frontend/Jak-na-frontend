import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <div className="footer__link">
      <Link exact to="/" className="footer__home">
        <p className="footer__link">Domů</p>
      </Link>
      <Link to="/About" className="footer__about">
        <p className="footer__link">O projektu & kontakt</p>
      </Link>
    </div>
    <p className="footer__text">Digitální akademie WEB - Czechitas 2021</p>
  </footer>
);

export default Footer;
