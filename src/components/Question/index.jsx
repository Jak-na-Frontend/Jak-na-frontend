import React from 'react';
import './style.css';
import Correct from '../../assets/check.svg';
import Incorrect from '../../assets/close.svg';

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
  const styleIcon = () => {
    if (isResult) {
      if (correctAnswer === userAnswer) {
        return 'question__icon question__icon--false';
      }
      if (correctAnswer === index) {
        return 'question__icon question__icon--correct';
      }
    }

    return 'question__icon';
  };

  return (
    <div className="question">
      <h4 className="question__title">
        {isResult && (
          <img
            className={styleIcon()}
            src={correctAnswer === userAnswer ? Correct : Incorrect}
          />
        )}
        <div className="question__header">
          <div className="question__number">
            Otázka č. {index}{' '}
            <span className="question__number--set">/ 10</span>{' '}
          </div>{' '}
          <div className="question__heading">{heading}</div>
        </div>
      </h4>
      {isResult && userAnswer === undefined && (
        <h3 className="question--nonAnswered">
          Otázka nebyla zodpovězena, správná odpověď je označena zeleně.
        </h3>
      )}
      {answers.map((item, index) => (
        <div key={index}>
          <label className={calcStyle(index)} htmlFor={`answer-${id}-${index}`}>
            <input
              name={`answer-${id}`}
              className="question__checkbox"
              disabled={!onSelect}
              type="radio"
              checked={isResult && userAnswer === index}
              id={`answer-${id}-${index}`}
              onChange={() => {
                if (onSelect) {
                  onSelect(id, index);
                }
              }}
            ></input>
            <span className="checkmark"></span>
            {item.text}
          </label>
        </div>
      ))}

      {isResult && (
        <div className="question__action">
          <a className="question__link" href={link} target="_blank">
            Více v odkazu
          </a>
        </div>
      )}
    </div>
  );
};

export default Question;
