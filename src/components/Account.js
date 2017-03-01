import React from 'react';
import { Link } from 'react-router';
// import { render } from 'react-dom';

class Account extends React.Component {

  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const accountDetails = this.state;
    this.props.processAccount({accountDetails}); // connected via basics_container (defined in actions)
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    

    return (
      <div className='container'>
        <h1> Lets create your login </h1>

        <br />

          <form >

            <div className="group">
              <input
                type="text"
                value={this.state.firstName}
                onChange={this.update("firstName")}
                required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>First Name</label>
            </div>

            <div className="group">
              <input
                type="text"
                value={this.state.lastName}
                onChange={this.update("lastName")}
                required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Last Name</label>
            </div>

            <div className="group">
              <input
                type="email"
                value={this.state.email}
                onChange={this.update("email")}
                required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Email</label>
            </div>

            <div className="group">
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Password</label>
            </div>

            <div className="group">
              <input
                type="password"
                required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Retype password</label>
            </div>


              <ul className='form-fields'>
                <li className="form-footer">
                  <Link className="btn -default" to="/businfo">Back</Link>
                  <button className="btn -primary pull-right" onClick={this.handleSubmit}>Next Step</button>
                </li>
              </ul>


          </form>

      </div>
    )

  }

}

export default Account;

// this.completeStep = this.completeStep.bind(this);
// completeStep(event) {
//   event.preventDefault();
//
//   const data = {
//     firstName: this.firstName.value,
//     lastName: this.lastName.value,
//     email: this.email.value,
//     password: this.password.value
//
//   }
//
//   this.props.saveValues(data)
//   this.props.nextStep()
// }
