import React from 'react';
import './style.css';
import Box from '../Box';
import { content } from './content';

const RoadMap = () => (
  <header className="heading">
    <h1 className="heading__text">Road mapa webového vývoje</h1>
    <div className="roadMap__content">
      {content.map((item) => {
        return <Box key={item.id} name={item.name} text={item.text} />;
      })}
    </div>
  </header>
);

export default RoadMap;
