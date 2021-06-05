import React from 'react';
import './style.css';

const Question = ({
  id,
  heading,
  answers,
  link,
  index,
  onSelect,
  isResult,
  correctAnswer,
  userAnswer,
}) => {
  const calcStyle = (index) => {
    if (isResult) {
      if (correctAnswer !== userAnswer && userAnswer === index) {
        return 'question__text question__text--false';
      }
      if (correctAnswer === index) {
        return 'question__text question__text--correct';
      }
    }

    return 'question__text';
  };

  return (
    <div className="question">
      <h4 className="question__title">
        Otázka č. {index} {heading}
      </h4>
      {isResult && !userAnswer && (
        <h3 className="question--nonAnswered">Nezodpovězeno</h3>
      )}
      {answers.map((item, index) => (
        <div key={index}>
          <input
            name={`answer-${id}`}
            className="question__checkbox"
            disabled={!onSelect}
            type="radio"
            id={`answer-${id}-${index}`}
            onChange={() => {
              if (onSelect) {
                onSelect(id, index);
              }
            }}
          ></input>
          <label className={calcStyle(index)} htmlFor={`answer-${id}-${index}`}>
            {item.text}
          </label>
        </div>
      ))}

      <div className="question__action">
        <a className="question__link" href={link}>
          Více infomací najdeš v odkazu.
        </a>
        {/* <button className="question__button" type="submit" value="Submit">
          Další otázka
        </button> */}
      </div>
    </div>
  );
};

export default Question;
