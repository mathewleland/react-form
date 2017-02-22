import React from 'react';
import './App.css';
// import { Router, Route, Link, IndexRoute, hashHistory, browswerHistory } from 'react-router'
import Basics from './components/Basics';
import BusInfo from './components/BusInfo';
import Account from './components/Account';
import Extended from './components/Extended';
import Confirm from './components/Confirm';
import Success from './components/Success';


let userData = {
  name: null,
  firstName: null,
  lastName: null,
  email: null,
  businessName: null,
  phone: null,
  streetAddress: null,
  city: "Folsom",
  usState: "California",
  zip: null,
  website: null,
  industry: null,
  facebook: null,
  twitter: null,
  yelp: null,
  password: null

};

class App extends React.Component {

  constructor() {
    super();

    this.saveValues = this.saveValues.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.submitRegistration = this.submitRegistration.bind(this);


    this.state = {
      step: 1
    };

  }

  getinitialState() {
    return {
      step: 1
    }
  }

  saveValues(data) {
    userData = Object.assign({}, userData, data)
  }

  nextStep() {
    this.setState({
      step: this.state.step + 1
    })
  }

  prevStep() {
    this.setState({
      step: this.state.step - 1
    })
  }

  submitRegistration(event) {
    event.preventDefault();
    alert('registration action will be made here on back end');
    this.nextStep();
  }

  render() {
      switch (this.state.step) {
        case 1:
          return <Basics userData={userData}
                         nextStep={this.nextStep}
                         saveValues={this.saveValues} />
        case 2:
         return <BusInfo userData={userData}
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        saveValues={this.saveValues} />
        case 3:
          return <Account userData={userData}
                         prevStep={this.prevStep}
                         nextStep={this.nextStep}
                         saveValues={this.saveValues} />
        case 4:
          return <Extended userData={userData}
                            prevStep={this.prevStep}
                            nextStep={this.nextStep}
                            saveValues={this.saveValues} />

        case 5:
          return <Confirm userData={userData}
                          prevStep={this.prevStep}
                          submitRegistration={this.submitRegistration} />

        case 6:
          return <Success userData={userData} />

        default:
          return (<div>Add a link here to go back to the first page, maybe reset state to 1</div>)
      }
  }
}

export default App;
