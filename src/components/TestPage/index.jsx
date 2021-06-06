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
            onClick={handleclick}
          >
            <p className="quiz__button">Test z HTML</p>
          </Link>
        </div>
        <div className="quiz__picture-wrapper">
          <img
            className="quiz__picture"
            src="assets/css.svg"
            alt="test z CSS"
          />
          <Link
            to="/testy/CSS"
            className="quiz__text quiz__link"
            onClick={handleclick}
          >
            <p className="quiz__button">Test z CSS</p>
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
            onClick={handleclick}
          >
            <p className="quiz__button">Test z JS</p>
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
            onClick={handleclick}
          >
            <p className="quiz__button">Test z Reactu</p>
          </Link>
        </div>
        <div className="quiz__picture-wrapper">
          <img
            className="quiz__picture"
            src="assets/git-icon.svg"
            alt="test z Gitu"
          />
          <Link
            to="/testy"
            className="quiz__text quiz__link"
            onClick={handleclick}
          >
            <p className="quiz__button">Test z Gitu</p>
          </Link>
        </div>
        <div className="quiz__picture-wrapper">
          <img
            className="quiz__picture"
            src="assets/bootstrap.svg"
            alt="test z Bootstrapu"
          />
          <Link
            to="/testy"
            className="quiz__text quiz__link"
            onClick={handleclick}
          >
            <p className="quiz__button">Test z&nbsp;Bootstrapu</p>
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
            onClick={handleclick()}
          >
            <p className="education__button">Pojď se učit</p>
          </Link>
        </div>
      </section>
    </>
  );
};

export default TestPage;
