import React, { useEffect, useState } from 'react';
import './style.css';
import Question from '../Question';
import { useParams } from 'react-router';
import questions from './questions';
import Result from '../Result';
import shuffle from 'lodash.shuffle';

let timer = null;

const Quiz = () => {
  const { name } = useParams();
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [questionForQuiz, setQuestionForQuiz] = useState(questions[name]);
  const [questionIndex, setquestionIndex] = useState(0);
  const [timeQuiz, setTimeQuiz] = useState(0);
  useEffect(() => {
    setQuestionForQuiz(shuffle(questionForQuiz).slice(0, 10));
  }, []);

  useEffect(() => {
    timer = setInterval(() => {
      setTimeQuiz(timeQuiz + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timeQuiz]);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const onSelect = (questionId, answerIndex) => {
    console.log(questionId, answerIndex);
    setSelectedAnswers({ ...selectedAnswers, [questionId]: answerIndex });
    console.log(selectedAnswers);
  };

  const handleSubmit = () => {
    if (questionIndex < questionForQuiz.length - 1) {
      setquestionIndex(questionIndex + 1);
    } else {
      clearInterval(timer);
      setIsSubmitted(true);
      window.scrollTo({ top: 0 });
    }
  };
  if (isSubmitted) {
    return (
      <Result
        name={name}
        selectedAnswers={selectedAnswers}
        questions={questionForQuiz}
        time={timeQuiz}
      />
    );
  }

  return (
    <>
      <header className="heading">
        <h1 className="heading__text">Test {name.toUpperCase()}</h1>
      </header>
      <h3>{timeQuiz}</h3>
      <Question
        id={questionForQuiz[questionIndex].id}
        heading={questionForQuiz[questionIndex].text}
        answers={questionForQuiz[questionIndex].source}
        link={questionForQuiz[questionIndex].link}
        index={questionIndex + 1}
        onSelect={onSelect}
      />

      <div className="quiz__footer">
        <button
          className="set__button"
          type="submit"
          value="Submit"
          onClick={handleSubmit}
        >
          {questionIndex < questionForQuiz.length - 1
            ? 'Další otázka'
            : 'Vyhodnotit test'}
        </button>
      </div>
    </>
  );
};

export default Quiz;
