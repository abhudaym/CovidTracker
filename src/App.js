import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Navbar';
import World from './World';
import India from './India';

 const App = () => {
  return(
    <Router>
    <Navbar />
    <div className="container">
    <Switch>
    <Route exact path = "/" component={World}></Route>
    <Route exact path = "/india" component={India}></Route>
    </Switch>
    </div>
    </Router>
  );
};

export default App;