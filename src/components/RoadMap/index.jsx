import React from 'react';
import './style.css';
import Box from '../Box';
import { content } from './content';
import { Link } from 'react-router-dom';

const RoadMap = () => (
  <>
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
        <Link to="/testy" className="quizRoadMap__link">
          <p className="quizRoadMap__button">Otestuj se</p>
        </Link>
      </div>
    </section>
  </>
);

export default RoadMap;
