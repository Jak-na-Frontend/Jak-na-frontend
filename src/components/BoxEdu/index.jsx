import React, { useState } from 'react';
import './style.css';

const BoxEdu = ({ name, text, tips, link, img }) => {
  const [openBox, setOpenBox] = useState(false);
  const handleClick = () => {
    setOpenBox(!openBox);
  };

  return (
    <div className="boxEdu">
      <div className="boxEdu__wrapper">
        <a className="boxEdu__link" href={link} target="_blank" alt={name}>
          <img className="boxEdu__img--logo" src={img} alt={name} />
        </a>

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
        <h3 className="boxEdu__title">{name}</h3>
        <p className="boxEdu__content">{text}</p>
        <ul>
          {tips.map((tip, index) => (
            <li key={index}>
              <a className="boxEdu__tip" href={tip.link}>
                {tip.note}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default BoxEdu;
