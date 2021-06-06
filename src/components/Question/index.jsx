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
        <div className="question__number">Otázka č. {index} / 10 -</div>{' '}
        <div className="question__heading">{heading}</div>
      </h4>
      {isResult && userAnswer === undefined && (
        <h3 className="question--nonAnswered">
          Otázka nebyla zodpovězena, správná odpověď je označena zeleně.
        </h3>
      )}
      {answers.map((item, index) => (
        <div key={index}>
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
          <label className={calcStyle(index)} htmlFor={`answer-${id}-${index}`}>
            {item.text}
          </label>
        </div>
      ))}

      {isResult && (
        <div className="question__action">
          <a className="question__link" href={link}>
            Více infomací najdeš v odkazu.
          </a>
        </div>
      )}
    </div>
  );
};

export default Question;
