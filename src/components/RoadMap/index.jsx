import React from 'react';
import './style.css';
import Box from '../Box';

const RoadMap = () => (
  <header className="heading">
    <h1 className="heading__text">Road mapa webového vývoje</h1>
    <div className="roadMap__content">
      <Box name="HTML" />
      <Box name="CSS" />
    </div>
  </header>
);

export default RoadMap;
