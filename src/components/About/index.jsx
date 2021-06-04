import React from 'react';
import './style.css';

const About = () => (
  <>
    <header class="heading">
      <h1 class="heading__text">O projektu</h1>
    </header>
    <section class="text">
      <p className="text">
        Náš projekt zatím bez názvu, je průvodce
        <strong> roadmapa pro začínající frontend vývojáře/ky</strong>, kteří
        chtějí vědět, jaké technologie a znalosti jsou pro tento obor potřeba.
      </p>
      <p className="text">
        Pro ujištění se ve znalostech jsou k dispozici
        <strong> testy s&nbsp;možností kontroly správných odpovědí</strong> nebo
        se přiučit ze zdrojů a&nbsp;dokumentace.
      </p>
      <p className="text">
        Plánovaná sekce o vzdělávání by měla nabídnout naše tipy kde najít
        materiály, kurzy či jiné vzdělávácí akce.
      </p>
      <p className="text"></p>
    </section>
  </>
);

export default About;
