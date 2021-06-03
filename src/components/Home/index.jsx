import React from 'react';
import './style.css';

const Home = () => (
  <main>
    <section className="introduction">
      <div className="introduction__picture-wrapper">
        <img
          className="introduction__picture"
          src="assets/FD_C.svg"
          alt="learning lady"
        />
      </div>
      <p className="introduction__text">
        Roadmapa | Testy | Vzdělávání <br />
        pro začínající frontend vývojáře/ky
      </p>
    </section>
  </main>
);

export default Home;
