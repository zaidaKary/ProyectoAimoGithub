import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ViewOne from './components/pageOne/ViewOne.jsx';
import ViewTwo from './components/pageTwo/ViewTwo.jsx';

export default function App() {
  return (
    <Router>
    {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
    <Switch>
      <Route path="/" component={ViewOne} exact />
      <Route path="/Busqueda" component={ViewTwo} />
    </Switch>
  </Router>
  );
}
