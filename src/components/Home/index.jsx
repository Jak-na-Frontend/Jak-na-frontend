import React from 'react';
import './style.css';

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
        <p className="quiz__text"></p>
      </div>
    </section>
  </main>
);

export default Home;
