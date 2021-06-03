import React, { useState } from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const [hamburger, setHamburger] = useState(false);

  const handleClick = () => {
    setHamburger(!hamburger);
  };

  return (
    <nav className="menu">
      <button id="menu__btn" className="menu__btn" onClick={handleClick} />

      <div className={hamburger ? 'menu__links menu--opened' : 'menu__links'}>
        <NavLink exact to="/" className="menu__item">
          Domů
        </NavLink>

        <NavLink to="/road-mapa-weoboveho-vyvoje" className="menu__item">
          Road mapa webového vývoje
        </NavLink>

        <NavLink to="/testy" className="menu__item">
          Testy
        </NavLink>

        <NavLink to="/vzdelavani" className="menu__item">
          Vzdělávání
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
