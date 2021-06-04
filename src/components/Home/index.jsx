import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Home = () => (
  <main>
    <section className="introduction">
      <div className="introduction__picture-wrapper">
        <img
          className="introduction__picture"
          src="assets/FD_C.svg"
          alt="learning lady"
        />
      </div>
      <p className="introduction__text">
        Roadmapa | Testy | Vzdělávání <br />
        pro začínající frontend vývojáře/ky
        <Link to="/road-mapa-weboveho-vyvoje" className="introduction__link">
          <p className="introduction__button">Zjistit víc</p>
        </Link>
      </p>
    </section>
    <section className="quiz">
      <div className="quiz__picture-wrapper">
        <img
          className="quiz__picture"
          src="assets/html.svg"
          alt="test z HTML"
        />
        <p className="quiz__text"></p>
        <img className="quiz__picture" src="assets/css.svg" alt="test z CSS" />
        <p className="quiz__text"></p>
        <img
          className="quiz__picture"
          src="assets/javascript.svg"
          alt="test z Javascriptu"
        />
      </div>
      <p className="quiz__text">
        <Link to="/testy" className="quiz__link">
          <p className="quiz__button">Otestuj se</p>
        </Link>
      </p>
    </section>
    <section className="education">
      <div className="education__picture-wrapper">
        <img
          className="education__picture"
          src="assets/Learn.svg"
          alt="learning lady"
        />
      </div>
      <div className="education__text">
        Kde se vzdělávat
        <Link to="/vzdelavani" className="education__link">
          <p className="education__button">Pojď se učit</p>
        </Link>
      </div>
    </section>
  </main>
);

export default Home;
