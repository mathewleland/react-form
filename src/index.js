import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter, Match, Miss } from 'react-router';
import App from './App';
import './index.css';
import { render } from 'react-dom';

const Root = () => {
  return (
    <App />
  )
}

render(<Root />, document.querySelector('#root'));
