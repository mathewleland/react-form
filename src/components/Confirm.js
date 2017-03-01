import React from 'react';
import { Link, browserHistory } from 'react-router';
import configureStore from '../store/store'

class Confirm extends React.Component {

  constructor() {
    super();

    this.submitInfo = this.submitInfo.bind(this);

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



  submitInfo() {
    alert("submission of user data");
    browserHistory.push('/success');
  }

  render() {


    console.log(this.props.session);
    let session = this.props.session;

    return (


      <div className='container'>
        <h2>Confirm your information</h2>


          <ul>
            <li><b>Business:</b> {session.busInfoDetails.busInfoData.businessName}</li>
            <li><b>First Name:</b> {session.accountDetails.accountDetails.firstName}</li>
            <li><b>Last Name:</b> {session.accountDetails.accountDetails.lastName}</li>
            <li><b>Email:</b> {session.accountDetails.accountDetails.email}</li>
            <li><b>Phone Number:</b> {session.busInfoDetails.busInfoData.phone}</li>
            <li><b>Street Address:</b> {session.busInfoDetails.busInfoData.streetAddress}</li>
            <li><b>City:</b> {session.busInfoDetails.busInfoData.city}</li>
            <li><b>State:</b> {session.busInfoDetails.busInfoData.usState}</li>
            <li><b>zip:</b> {session.busInfoDetails.busInfoData.zip}</li>
            <li><b>website:</b> {session.busInfoDetails.busInfoData.website}</li>
            <li><b>Facebook link:</b> {session.extendedDetails.extendedDetails.facebook}</li>
            <li><b>Twitter link:</b> {session.extendedDetails.extendedDetails.twitter}</li>
            <li><b>Yelp link:</b> {session.extendedDetails.extendedDetails.yelp}</li>


          </ul>


        <ul className='form-fields'>
          <li className="form-footer">
            <Link className="btn -default" to="/extended">Back</Link>
            <button className="btn -primary pull-right" onClick={this.submitInfo}>Submit Registration</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Confirm;
