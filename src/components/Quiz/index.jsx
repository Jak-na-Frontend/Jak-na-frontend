import React from 'react';
import './style.css';
import Question from '../Question';
import { useParams } from 'react-router';

const Quiz = () => {
  const { name } = useParams();
  return (
    <>
      <header className="heading">
        <h1 className="heading__text">Test {name.toUpperCase()}</h1>
      </header>
      <Question />
    </>
  );
};

export default Quiz;
