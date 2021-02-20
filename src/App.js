import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Dashboard from './components/Dashboard'
import Deck from './components/quickSelect/Deck'


function App() {
  return (
    <div className="container">
      <Router>
        <h1><b><i>rankify</i></b></h1>
        <Switch>
          <Route exact path="/"><Dashboard/></Route>
          <Route path="/quick-select"><Deck/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
