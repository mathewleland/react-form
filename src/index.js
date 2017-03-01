import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// import { Router, Route, IndexRoute, browserHistory, Link, withRouter } from 'react-router';
// import App from './App';
import './index.css';
// import { render } from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  // Could check for current user, or past user here?
  store = configureStore();

  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store}/>, root);

  // NOTE: FOR TESTING, REMOVE FOR PRODUCTION
  // in Chrome DevTools, call window.store.getState() to examine the store
  window.store = store;
});
