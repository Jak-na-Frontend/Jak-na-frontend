import React, { useState } from 'react';
import './style.css';

const BoxEdu = ({ name, text, note, link }) => {
  const [openBox, setOpenBox] = useState(false);
  const handleClick = () => {
    setOpenBox(!openBox);
  };

  return (
    <div className="boxEdu">
      <div className="boxEdu__wrapper">
        <img className="boxEdu__img" src={`assets/${name}.svg`} alt="{name}" />
        <h3 className="boxEdu__title">{name}</h3>
        <img
          src="assets/arrows.svg"
          alt="šipka"
          onClick={handleClick}
          className={
            !openBox ? 'boxEdu__img ' : 'boxEdu__img boxEdu__img--open'
          }
        />
      </div>
      <div
        className={
          openBox
            ? 'boxEdu__description '
            : 'boxEdu__description boxEdu__description--closed'
        }
      >
        <p className="boxEdu__content">{text}</p>
        <a className="boxEdu__content" href={link}>
          {note}
        </a>
      </div>
    </div>
  );
};
export default BoxEdu;
