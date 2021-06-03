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

      <Route path="/testy">
        <TestPage />
      </Route>

      <Route path="/vzdelavani">
        <Education />
      </Route>
    </Switch>

    <Footer />
  </Router>
);

render(<App />, document.querySelector('#app'));
