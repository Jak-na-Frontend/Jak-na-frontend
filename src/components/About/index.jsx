import React from 'react';
import './style.css';

const About = () => (
  <>
    <header className="heading">
      <h1 className="heading__text">O projektu</h1>
    </header>
    <section className="text">
      <p className="text">
        <strong>Jak na frontend</strong> je průvodce
        <strong> pro začínající frontend vývojáře/ky</strong>, kteří chtějí
        vědět, jaké technologie a znalosti jsou pro tento obor potřeba.
      </p>
      <p className="text">
        Pro kontrolu a ujištění se ve znalostech jsme vytvořili
        <strong> testy s&nbsp;možností kontroly správných odpovědí</strong>{' '}
        a&nbsp;odkazy na zdroje v&nbsp;dokumentaci.
      </p>
      <p className="text">
        Sekce o vzdělávání nabízí naše tipy kde najít materiály, kurzy či jiné
        vzdělávácí akce pro osobní rozvoj.
      </p>
      <p className="text"></p>
    </section>
    <section className="autors">
      <header className="heading">
        <h1 className="heading__text">Iva Kubíčková</h1>
        <div className="heading__icon">
          <a
            class="a-social"
            href="https://github.com/Ivakubickova"
            target="_blank"
          >
            <img class="github" src="/assets/gh.svg" alt="github" width="31" />
          </a>
          <a
            class="a-social"
            href="mailto:ivakubickova55@gmail.com"
            target="_blank"
          >
            <img
              class="mailbox"
              src="/assets/mailbox.svg"
              alt="mailbox"
              width="29"
            />
          </a>
          <a
            class="a-social"
            href="https://www.linkedin.com/in/iva-kub%C3%AD%C4%8Dkov%C3%A1-589873106"
            target="_blank"
          >
            <img
              class="linkedin"
              src="/assets/in.svg"
              alt="linkedin"
              width="29"
            />
          </a>
        </div>
      </header>

      <p className="text">
        Vystudovala jsem překladatelství a&nbsp;francouzsko-českou veřejnou
        správu. Nyní pracuji v&nbsp;oddělení financí v&nbsp;mezinárodní firmě.
        Protože je to disciplína plná předem daných pravidel a&nbsp;mnohdy
        monotónních úkonů, začala jsem se poohlížet po něčem kreativnějším
        a&nbsp;flexibilnějším. Inspirovaly mě články o&nbsp;technologických
        firmách a&nbsp;jejich přístupu k&nbsp;práci a&nbsp;zaměstnancům, které
        jsem překládala pro jeden známý pracovní portál.
      </p>
      <p className="text">
        S Czechitas jsem absolvovala kurzy Staň se kodérkou a&nbsp;Bootstrap.
      </p>

      <header className="heading">
        <h1 className="heading__text">Lenka Silná</h1>
        <div className="heading__icon">
          <a
            class="a-social"
            href="https://github.com/LenkaSilna"
            target="_blank"
          >
            <img class="github" src="/assets/gh.svg" alt="github" width="31" />
          </a>
          <a
            class="a-social"
            href="mailto:lenka.barica@gmail.com"
            target="_blank"
          >
            <img
              class="mailbox"
              src="/assets/mailbox.svg"
              alt="mailbox"
              width="29"
            />
          </a>
          <a
            class="a-social"
            href="https://www.linkedin.com/in/lenka-silna8488b8108"
            target="_blank"
          >
            <img
              class="linkedin"
              src="/assets/in.svg"
              alt="linkedin"
              width="29"
            />
          </a>
        </div>
      </header>

      <p className="text">
        Na začátku mojí cesty k forontendu stála Luďkova "Adéla na cestách",
        on-line kurz HTML a&nbsp;CSS. Díky tomu jsem objevila Czechitas
        a&nbsp;další jejich kurzy. Prošla jsem základy programování
        v&nbsp;Phytonu, Bootstrap, Datovou analýzu, testování, kurz "Staň se
        kodérkou" mě nadchl a&nbsp;inspiroval pro změnu kariéry do webového
        vývoje.
      </p>
      <p className="text">
        Jsem vystudovaná grafička a&nbsp;historik umění. Celý život mě provázelo
        nadšení pro IT. Ve frontendu jsem našla univerzální propojení designu,
        techniky a&nbsp;testování.
      </p>
    </section>
  </>
);

export default About;
