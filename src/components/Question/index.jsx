import React from 'react';
import './style.css';

const Question = () => {
  return (
    <div className="question">
      <h4 className="question__title">Otázka</h4>

      <input type="checkbox" id="1"></input>
      <label for="1">XXX</label>
      <br />

      <button type="submit" value="Submit">
        Další otázka
      </button>
    </div>
  );
};

export default Question;
