import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../App';
import Basics from './Basics';
import BusInfo from './BusInfo';
import Account from './Account';
import Extended from './Extended';
import Confirm from './Confirm';
import Success from './Success';

const Root = ({store}) => {
  console.log("root entered"); // for testing
  
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default Root;
