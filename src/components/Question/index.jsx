import React from 'react';
import './style.css';

const Question = () => {
  return (
    <div className="question">
      <h4 className="question__title">Otázka</h4>

      <input className="question__checkbox" type="checkbox" id="1"></input>
      <label className="question__text" for="1">
        XXX
      </label>
      <br />
      <div className="question__action">
        <button className="question__button" type="submit" value="Submit">
          Další otázka
        </button>
      </div>
    </div>
  );
};

export default Question;
