import React from 'react';
import { render } from 'react-dom';
import './style.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/Home';
import RoadMap from './components/RoadMap';
import TestPage from './components/TestPage';
import Education from './components/Education';
import About from './components/About';
import Quiz from './components/Quiz';

const App = () => (
  <Router>
    <Navigation />

    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/road-mapa-weboveho-vyvoje">
        <RoadMap />
      </Route>

      <Route path="/testy/:name">
        <Quiz />
      </Route>

      <Route path="/testy">
        <TestPage />
      </Route>

      <Route path="/vzdelavani">
        <Education />
      </Route>

      <Route path="/About">
        <About />
      </Route>
    </Switch>

    <Footer />
  </Router>
);

render(<App />, document.querySelector('#app'));
