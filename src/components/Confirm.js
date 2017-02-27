import React from 'react';
import { Router, Route, IndexRoute, browserHistory, Link, withRouter } from 'react-router';

class Confirm extends React.Component {

  constructor() {
    super();

    // LATER, COLLECT THESE ALL FROM STORE, OR FIND BETTER WAY
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      businessName: "",
      phone: "",
      streetAddress: "",
      city: "",
      usState: "",
      zip: "",
      website: "",
      industry: "",
      facebook: "",
      twitter: "",
      yelp: "",
      hours: ""
    };
  }

  // <ul>
  //   <li><b>First Name:</b> {this.props.userData.firstName}</li>
  //   <li><b>Last Name:</b> {this.props.userData.lastName}</li>
  //   <li><b>Email:</b> {this.props.userData.email}</li>
  //   <li><b>Business Name:</b> {this.props.userData.businessName}</li>
  //   <li><b>Phone Number:</b> {this.props.userData.phone}</li>
  //   <li><b>Street Address:</b> {this.props.userData.streetAddress}</li>
  //   <li><b>City:</b> {this.props.userData.city}</li>
  //   <li><b>State:</b> {this.props.userData.usState}</li>
  //   <li><b>zip:</b> {this.props.userData.zip}</li>
  //   <li><b>website:</b> {this.props.userData.website}</li>
  //   <li><b>industry:</b> {this.props.userData.industry}</li>
  //   <li><b>Facebook link:</b> {this.props.userData.facebook}</li>
  //   <li><b>Twitter link:</b> {this.props.userData.twitter}</li>
  //   <li><b>Yelp link:</b> {this.props.userData.yelp}</li>
  //   <li><b>Store Hours:</b> {this.props.userData.hours}</li>
  // </ul>

  render() {
    return (
      <div className='container'>
        <h2>Confirm your information</h2>


        <ul className='form-fields'>
          <li className="form-footer">
            <Link className="btn -default" to="/">Back</Link>
            <button className="btn -primary pull-right" onClick={this.props.signup}>Submit Registration</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Confirm;
