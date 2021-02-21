import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Dashboard from './components/Dashboard'
import QuickSelect from './components/quickSelect'
import Cup from './components/cup'

function App() {
  return (
    <div className="container">
      <Router>
        <h1><b><i><a className="text-white" href="/">rankify</a></i></b></h1>
        <Switch>
          <Route exact path="/"><Dashboard/></Route>
          <Route path="/quick-select"><QuickSelect/></Route>
          <Route path="/cup"><Cup/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
