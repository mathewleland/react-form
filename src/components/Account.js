import React from 'react';
import { browserHistory } from 'react-router';

class Account extends React.Component {

  constructor() {
    super();
    this.completeStep = this.completeStep.bind(this);
  }

  completeStep(event) {
    event.preventDefault();

    localStorage.setItem('firstName', this.firstName.value);
    localStorage.setItem('lastName', this.lastName.value);
    localStorage.setItem('email', this.email.value)
    localStorage.setItem('password', this.password.value);
    browserHistory.push("/confirm")
  }


  render() {
    return (
      <div className='container'>
        <h1> Lets create your login </h1>
        <p> Review the info below and then create a password </p>
        <br />

          <form ref={(input) => this.questions = input}>

            <div className="group">
              <input type="text" ref={(input) => this.firstName = input} defaultValue={ localStorage.firstName } required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>First Name</label>
            </div>

            <div className="group">
              <input type="text" ref={(input) => this.lastName = input} defaultValue={ localStorage.lastName } required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Last Name</label>
            </div>

            <div className="group">
              <input type="email" ref={(input) => this.email = input} defaultValue={ localStorage.email }  required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Email</label>
            </div>

            <div className="group">
              <input type="password" ref={(input) => this.password = input} defaultValue={ localStorage.password }  required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Password, min 8 characters</label>
            </div>

              <ul className='form-fields'>
                <li className="form-footer">
                  <button className="btn -primary pull-right" onClick={this.completeStep}>Next Step</button>
                </li>
              </ul>


          </form>

      </div>
    )

  }

}

export default Account;
