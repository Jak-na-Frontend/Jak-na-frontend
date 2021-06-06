import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const handleSubmit = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <main>
      <section className="introduction">
        <div className="introduction__picture-wrapper">
          <img
            className="introduction__picture"
            src="assets/FD_C.svg"
            alt="learning lady"
          />
        </div>
        <div className="introduction__text">
          Co je to webový vývoj
          <br />
          <Link to="/road-mapa-weboveho-vyvoje" className="introduction__link">
            <p className="introduction__button" onClick={handleSubmit()}>
              Zjistit víc
            </p>
          </Link>
        </div>
      </section>
      <section className="quiz--home">
        <div className="quiz__picture-wrapper--home">
          <Link to="/testy/html">
            <img
              className="quiz__picture"
              src="assets/html.svg"
              alt="test z HTML"
              onClick={handleSubmit()}
            />
          </Link>
          <Link to="/testy/css">
            <p className="quiz__text"></p>
            <img
              className="quiz__picture"
              src="assets/css.svg"
              alt="test z CSS"
              onClick={handleSubmit()}
            />
          </Link>
          <Link to="/testy/javascript">
            <p className="quiz__text"></p>
            <img
              className="quiz__picture"
              src="assets/javascript.svg"
              alt="test z Javascriptu"
              onClick={handleSubmit()}
            />
          </Link>
        </div>
        <div className="quiz__text">
          <Link to="/testy" className="quiz__link">
            <p className="quiz__button" onClick={handleSubmit()}>
              Otestuj se
            </p>
          </Link>
        </div>
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
            <p className="education__button" onClick={handleSubmit()}>
              Pojď se učit
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
