import React, { useState } from 'react';
import './style.css';

const Box = ({ name, text }) => {
  const [openBox, setOpenBox] = useState(false);
  const handleClick = () => {
    setOpenBox(!openBox);
  };

  return (
    <div className="box">
      <div className="box__wrapper">
        <h3 className="box__title">{name}</h3>
        <img
          src="assets/arrows.svg"
          alt="šipka"
          onClick={handleClick}
          className={!openBox ? 'box__img ' : 'box__img box__img--open'}
        />
      </div>
      <div
        className={
          openBox
            ? 'box__description '
            : 'box__description box__description--closed'
        }
      >
        <ul className="box__content">
          <li>{text}</li>
        </ul>
      </div>
    </div>
  );
};
export default Box;
