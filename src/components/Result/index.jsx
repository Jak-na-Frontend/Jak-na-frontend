import React from 'react';
import './style.css';

const Result = ({ name }) => {
  return (
    <>
      <header className="heading">
        <h1 className="heading__text">Výsledky testu z {name.toUpperCase()}</h1>
      </header>
    </>
  );
};

export default Result;
