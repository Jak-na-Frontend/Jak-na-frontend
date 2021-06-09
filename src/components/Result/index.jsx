import React from 'react';
import './style.css';
import Question from '../Question';
import { Link } from 'react-router-dom';
import Medal from '../../assets/medal.svg';

const Result = ({ name, selectedAnswers, questions, time }) => {
  const result = questions.map((item) => {
    const answer = item.ok === selectedAnswers[item.id];
    return { ...item, isCorrect: answer };
  });
  const handleSubmit = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      <header className="heading">
        <h1 className="heading__text">Výsledky testu z {name.toUpperCase()}</h1>
      </header>
      <div className="result--data">
        <img className="subheading__img" src={Medal} />
        <div className="result--text">
          <h3 className="subheading__time">
            Dokončeno za {Math.floor(time / 60)} minut a {time % 60} sekund
          </h3>
          <h3 className="subheading">
            Zodpovězeno otázek {result.filter((item) => item.isCorrect).length}{' '}
            / {result.length}
          </h3>
          <h3 className="subheading">
            Úspěšnost{' '}
            {(result.filter((item) => item.isCorrect).length / result.length) *
              100}{' '}
            %
          </h3>
        </div>
      </div>
      {result.map((item, index) => (
        <Question
          key={item.id}
          id={item.id}
          heading={item.text}
          answers={item.source}
          link={item.link}
          index={index + 1}
          correctAnswer={item.ok}
          userAnswer={selectedAnswers[item.id]}
          isCorrect={item.isCorrect}
          isResult
        />
      ))}
      <div className="quiz__text">
        <Link to="/testy" className="quiz__link" onClick={handleSubmit}>
          <p className="quiz__button-result">Zkus jiný test</p>
        </Link>
      </div>
    </>
  );
};

export default Result;
