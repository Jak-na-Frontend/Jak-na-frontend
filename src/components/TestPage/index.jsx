import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Quiz from '../Quiz';

const TestPage = () => {
  const handleclick = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      <header className="heading">
        <h1 className="heading__text">Testy</h1>
      </header>
      <section className="quiz">
        <div className="quiz__picture-wrapper">
          <img
            className="quiz__picture"
            src="assets/html.svg"
            alt="test z HTML"
          />
          <Link
            to="/testy/html"
            className="quiz__text quiz__link"
            onClick={handleclick()}
          >
            <p className="quiz__button">Test HTML</p>
          </Link>
        </div>
        <div className="quiz__picture-wrapper">
          <img
            className="quiz__picture"
            src="assets/Css.svg"
            alt="test z CSS"
          />
          <Link
            to="/testy/CSS"
            className="quiz__text quiz__link"
            onClick={handleclick()}
          >
            <p className="quiz__button">Test CSS</p>
          </Link>
        </div>
        <div className="quiz__picture-wrapper">
          <img
            className="quiz__picture"
            src="assets/javascript.svg"
            alt="test z Javascriptu"
          />
          <Link
            to="/testy/Javascript"
            className="quiz__text quiz__link"
            onClick={handleclick()}
          >
            <p className="quiz__button">Test JS</p>
          </Link>
        </div>

        <div className="quiz__picture-wrapper">
          <img
            className="quiz__picture"
            src="assets/react.svg"
            alt="test z Reactu"
          />
          <Link
            to="/testy/React"
            className="quiz__text quiz__link"
            onClick={handleclick()}
          >
            <p className="quiz__button">Test Reactu</p>
          </Link>
        </div>
        <div className="quiz__picture-wrapper">
          <img
            className="quiz__picture"
            src="assets/git-icon.svg"
            alt="test z Gitu"
          />
          <Link
            to="/testy/GIT"
            className="quiz__text quiz__link"
            onClick={handleclick()}
          >
            <p className="quiz__button">Test Git</p>
          </Link>
        </div>
        <div className="quiz__picture-wrapper">
          <img
            className="quiz__picture"
            src="assets/bootstrap.svg"
            alt="test z Bootstrapu"
          />
          <Link
            to="/testy/Bootstrap"
            className="quiz__text quiz__link"
            onClick={handleclick()}
          >
            <p className="quiz__button">Test Bootstrap</p>
          </Link>
        </div>
        <div className="quiz__picture-wrapper">
          <img
            className="quiz__picture"
            src="assets/english.svg"
            alt="test z Angličtiny"
          />
          <Link
            to="/testy/Angličtina"
            className="quiz__text quiz__link"
            onClick={handleclick()}
          >
            <p className="quiz__button">Test Angličtina</p>
          </Link>
        </div>
        <div className="quiz__picture-wrapper">
          <img
            className="quiz__picture"
            src="assets/graphic.svg"
            alt="test z Grafiky"
          />
          <Link
            to="/testy/grafika"
            className="quiz__text quiz__link"
            onClick={handleclick()}
          >
            <p className="quiz__button">Test Grafika</p>
          </Link>
        </div>
        <div className="quiz__picture-wrapper">
          <img
            className="quiz__picture"
            src="assets/sass.svg"
            alt="test z Sass"
          />
          <Link
            to="/testy/Sass"
            className="quiz__text quiz__link"
            onClick={handleclick()}
          >
            <p className="quiz__button">Test&nbsp;Sass</p>
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
          <Link
            to="/vzdelavani"
            className="education__link"
            onClick={handleclick}
          >
            <p className="education__button">Pojď se učit</p>
          </Link>
        </div>
      </section>
    </>
  );
};

export default TestPage;
