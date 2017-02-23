import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../App';
import Basics from './Basics';
import BusInfo from './BusInfo';
import Account from './Account';
import Extended from './Extended';
import Confirm from './Confirm';
import Success from './Success';

const Root = () => {
  console.log("root entered"); // for testing
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Basics} />
          <Route path="/businfo" component={BusInfo}/>
          <Route path="/account" component={Account}/>
          <Route path="/extended" component={Extended}/>
          <Route path="/confirm" component={Confirm}/>
          <Route path="/success" component={Success}/>
      </Route>
    </Router>
  );
};

export default Root;
