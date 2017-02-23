import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../App';
import Basics from './Basics';
import BusInfo from './BusInfo';

const Root = () => {
  console.log("root entered");
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Basics} />
        <Route path="/businfo" component={BusInfo}/>
      </Route>
    </Router>
  );
};

export default Root;
