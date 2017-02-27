import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from '../App';
import BasicsContainer from './basics_container';
import BusInfoContainer from './businfo_container';
import AccountContainer from './account_container';
import ExtendedContainer from './extended_container';
import ConfirmContainer from './confirm_container';
import SuccessContainer from './success_container';

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={BasicsContainer} />
            <Route path="/businfo" component={BusInfoContainer}/>
            <Route path="/account" component={AccountContainer}/>
            <Route path="/extended" component={ExtendedContainer}/>
            <Route path="/confirm" component={ConfirmContainer}/>
            <Route path="/success" component={SuccessContainer}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
