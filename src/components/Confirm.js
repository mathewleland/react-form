import React from 'react';
import { browserHistory } from 'react-router';

class Confirm extends React.Component {

  completeStep() {
    localStorage.setItem('confirmed', true)
    browserHistory.push('/success')
  }
  render() {
    return (
      <div className='container'>
        <h2>Confirm your information</h2>
            <table>
              <tbody>
                <tr>
                  <td>First name</td>
                  <td>{localStorage.firstName}</td>
                </tr>
                <tr>
                  <td>Last Name</td>
                  <td>{localStorage.lastName}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{localStorage.email}</td>
                </tr>
                <tr>
                  <td>Business / Org name</td>
                  <td>{localStorage.businessName}</td>
                </tr>
                <tr>
                  <td>Phone number</td>
                  <td>{localStorage.phone}</td>
                </tr>
                <tr>
                  <td>Street Address</td>
                  <td>{localStorage.streetAddress}</td>
                </tr>
                <tr>
                  <td>City</td>
                  <td>{localStorage.city}</td>
                </tr>
                <tr>
                  <td>State</td>
                  <td>{localStorage.usState}</td>
                </tr>
                <tr>
                  <td>ZIP</td>
                  <td>{localStorage.zip}</td>
                </tr>
                <tr>
                  <td>Website </td>
                  <td>{localStorage.website || "none yet"}</td>
                </tr>
                <tr>
                  <td>Industry</td>
                  <td>{localStorage.industry}</td>
                </tr>
                <tr>
                  <td>Plan</td>
                  <td>{localStorage.plan || "Engage"}</td>
                </tr>
              </tbody>
            </table>


        <ul className='form-fields'>
          <li className="form-footer">
            <button className="btn -primary pull-right" onClick={this.completeStep}>Submit</button>
            <button className="btn -reset -default pull-right" onClick={this.props.startOver}>Reset and start over </button>
          </li>
        </ul>
      </div>
    )
  }
}

export default Confirm;
