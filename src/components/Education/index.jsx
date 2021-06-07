import React from 'react';
import './style.css';
import BoxEdu from '../BoxEdu';
import { education } from './education';

const Education = () => (
  <>
    <header className="heading">
      <h1 className="heading__text">Vzdělávání</h1>
    </header>
    <div className="roadMap__content">
      {education.map((item) => {
        return (
          <BoxEdu
            key={item.id}
            name={item.name}
            text={item.text}
            tip={item.note}
            link={item.link}
          />
        );
      })}
    </div>
  </>
);

export default Education;
