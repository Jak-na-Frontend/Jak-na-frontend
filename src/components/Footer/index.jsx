import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleSubmit = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <footer className="footer">
      <div className="footer__link">
        <Link
          to="/"
          className="footer__home footer__link"
          onClick={handleSubmit}
        >
          Domů
        </Link>
        <Link
          to="/About"
          className="footer__about footer__link"
          onClick={handleSubmit}
        >
          O projektu &amp; kontakt
        </Link>
      </div>
      <p className="footer__text">Digitální akademie WEB - Czechitas 2021</p>
    </footer>
  );
};

export default Footer;
