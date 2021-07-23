import React from 'react';
import './style.css';
import Box from '../Box';
import { content } from './content';
import { Link } from 'react-router-dom';

const RoadMap = () => {
  const handleSubmit = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      <div>
        <p className="text">
          <strong>
            Webový vývoj je tvorba kódu pro uživatelské rozhraní webové stránky.
          </strong>
        </p>
        <p className="text">
          Stará se funkčnost, intuitivnost a&nbsp;jednoduchou ovladatelnost
          vizuálního prostředí stránky.
        </p>
        <p className="text">
          Co vše by měl webový vývojář(ka) znát a&nbsp;jakých tématech se
          orientovat, napovídá Road mapa.
        </p>
      </div>
      <header className="heading">
        <h1 className="heading__text">Road mapa webového vývoje</h1>
      </header>
      <div className="roadMap__content">
        {content.map((item) => {
          return <Box key={item.id} name={item.name} text={item.text} />;
        })}
      </div>
      <section className="quizRoadMap">
        <div className="quizRoadMap__picture-wrapper">
          <img
            className="quizRoadMap__picture"
            src="assets/quiz.svg"
            alt="thinking lady"
          />
        </div>
        <div className="quizRoadMap__text">
          <Link
            to="/testy"
            className="quizRoadMap__link"
            onClick={handleSubmit}
          >
            <p className="quizRoadMap__button">Otestuj se</p>
          </Link>
        </div>
      </section>
    </>
  );
};

export default RoadMap;
