import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import Basics from './components/Basics';
import BusInfo from './components/BusInfo';
import Extended from './components/Extended';
import Account from './components/Account';
import Confirm from './components/Confirm';
import SelectPlan from './components/SelectPlan';
import Success from './components/Success';


const router = (
  <Router history={browserHistory}>
    <Route path="/" component={SelectPlan}/>
    <Route path="/lookup" component={App}>
      <IndexRoute component={Basics} />
      <Route path="/basics" component={Basics}/>
      <Route path="/businfo" component={BusInfo} />
      <Route path="/account" component={Account} />
      <Route path="/extended" component={Extended} />
      <Route path="/confirm" component={Confirm} />
      <Route path="/success" component={Success} />
    </Route>

  </Router>
)

render(router, document.querySelector('#root'));
