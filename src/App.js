import React, { Component } from 'react';
import './App.css';
import EntryForm from './components/EntryForm'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3>Welcome to</h3>
          <h1>Locable</h1>
        </div>
        <EntryForm />
      </div>
    );
  }
}

export default App;
