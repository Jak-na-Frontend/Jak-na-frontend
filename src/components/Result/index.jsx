import React from 'react';
import './style.css';
import Question from '../Question';

const Result = ({ name, selectedAnswers, questions }) => {
  const result = questions.map((item) => {
    const answer = item.ok === selectedAnswers[item.id];
    return { ...item, isCorrect: answer };
  });

  return (
    <>
      <header className="heading">
        <h1 className="heading__text">Výsledky testu z {name.toUpperCase()}</h1>
      </header>
      <h3>
        {result.filter((item) => item.isCorrect).length} / {result.length}
      </h3>
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
    </>
  );
};

export default Result;
