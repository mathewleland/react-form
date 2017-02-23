import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, Link, withRouter } from 'react-router';
import App from './App';
import './index.css';
import { render } from 'react-dom';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  console.log("dom content loaded");
  const root = document.getElementById('root');

  ReactDOM.render(<Root/>, root);
});
