import React, { useState } from 'react';
import './style.css';
import Question from '../Question';
import { useParams } from 'react-router';
import questions from './questions';
import Result from '../Result';

const Quiz = () => {
  const { name } = useParams();
  const questionForQuiz = questions[name].slice(0, 10);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const onSelect = (questionId, answerIndex) => {
    console.log(questionId, answerIndex);
    setSelectedAnswers({ ...selectedAnswers, [questionId]: answerIndex });
    console.log(selectedAnswers);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };
  if (isSubmitted) {
    return <Result name={name} />;
  }

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
      <div className="quiz__footer">
        <button
          className="set__button"
          type="submit"
          value="Submit"
          onClick={handleSubmit}
        >
          Vyhodnotit test
        </button>
      </div>
    </>
  );
};

export default Quiz;
