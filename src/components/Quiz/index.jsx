import React, { useState } from 'react';
import './style.css';
import Question from '../Question';
import { useParams } from 'react-router';
import questions from './questions';

const Quiz = () => {
  const { name } = useParams();
  const questionForQuiz = questions[name];
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const onSelect = (questionId, answerIndex) => {
    console.log(questionId, answerIndex);
  };

  return (
    <>
      <header className="heading">
        <h1 className="heading__text">Test {name.toUpperCase()}</h1>
      </header>
      {questionForQuiz.map((item, index) => (
        <Question
          key={item.id}
          id={item.id}
          heading={item.text}
          answers={item.source}
          link={item.link}
          index={index + 1}
          onSelect={onSelect}
        />
      ))}
    </>
  );
};

export default Quiz;
