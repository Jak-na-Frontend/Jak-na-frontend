import React from 'react';
import './style.css';

const Question = ({ id, heading, answers, link, index, onSelect }) => {
  return (
    <div className="question">
      <h4 className="question__title">
        Otázka č. {index} {heading}
      </h4>
      {answers.map((item, index) => (
        <div key={index}>
          <input
            name={`answer-${id}`}
            className="question__checkbox"
            type="radio"
            id={`answer-${id}-${index}`}
            onChange={() => {
              onSelect(id, index);
            }}
          ></input>
          <label className="question__text" htmlFor={`answer-${id}-${index}`}>
            {item.text}
          </label>
        </div>
      ))}

      <div className="question__action">
        <a className="question__link" href={link}>
          Více infomací najdeš zde
        </a>
        <button className="question__button" type="submit" value="Submit">
          Další otázka
        </button>
      </div>
    </div>
  );
};

export default Question;
