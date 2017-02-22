import React from 'react';
// import { render } from 'react-dom';

class Account extends React.Component {

  constructor() {
    super();
    this.completeStep = this.completeStep.bind(this);
  }

  completeStep(event) {
    event.preventDefault();

    const data = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      email: this.email.value,
      password: this.password.value

    }

    this.props.saveValues(data)
    this.props.nextStep()
  }


  render() {
    return (
      <div className='container'>
        <h1> Lets create your login </h1>
        <p> Review the info below and then create a password </p>
        <br />

          <form ref={(input) => this.questions = input}>

            <div className="group">
              <input type="text" ref={(input) => this.firstName = input} defaultValue={ this.props.userData.firstName } required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>First Name</label>
            </div>

            <div className="group">
              <input type="text" ref={(input) => this.lastName = input} defaultValue={ this.props.userData.lastName } required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Last Name</label>
            </div>

            <div className="group">
              <input type="text" ref={(input) => this.email = input} defaultValue={ this.props.userData.email }  required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Email</label>
            </div>

            <div className="group">
              <input type="password" ref={(input) => this.password = input} defaultValue={ this.props.userData.password }  required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Password, min 8 characters</label>
            </div>

            <div className="group">
              <input type="password" ref={(input) => this.password2 = input} defaultValue={ this.props.userData.password2 }  required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Retype password</label>
            </div>


              <ul className='form-fields'>
                <li className="form-footer">
                  <button className="btn -default " onClick={this.props.prevStep}>Back</button>
                  <button className="btn -primary pull-right" onClick={this.completeStep}>Next Step</button>
                </li>
              </ul>


          </form>

      </div>
    )

  }

}

export default Account;
