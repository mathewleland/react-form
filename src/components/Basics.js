import React from 'react';
import { Router, Route, IndexRoute, hashHistory, Link, withRouter } from 'react-router';

class Basics extends React.Component {

  constructor() {
    super();

    this.state = {
      name: "",
      firstName: "",
      lastName: "",
      email: "",
      businessName: ""
    };

    // this.completeStep = this.completeStep.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // completeStep(event) {
  //   event.preventDefault();
  //
  //   const data = {
  //     name: this.name.value,
  //     firstName: this.name.value.split(' ')[0],
  //     lastName: this.name.value.split(' ')[1],
  //     email: this.email.value,
  //     businessName: this.businessName.value
  //   };
  //
  //   this.props.saveValues(data);
  //   this.props.nextStep();
  // }

  handleSubmit(e) {
    e.preventDefault();
    const basicsDetails = this.state;
    this.props.processBasics({basicsDetails}); // connected via basics_container (defined in actions)
  }

  render() {
    return (
      <div className='container'>
        <h1> Basic Questions </h1>

        <form ref={(input) => this.questions = input}>

          <div className="group">
            <input type="text" ref={(input) => this.name = input} defaultValue={ this.state.name } required />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>First and Last Name</label>
          </div>

          <div className="group">
            <input type="text" ref={(input) => this.email = input} defaultValue={ this.state.email } required />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Email</label>
          </div>

          <div className="group">
            <input type="text" ref={(input) => this.businessName = input} defaultValue={ this.state.businessName } required />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Business Name</label>
          </div>

          <button onClick={ this.handleSubmit } className='btn -primary pull-right'> Next Step </button>

        </form>


      </div>
    );
  }
}

export default Basics;
