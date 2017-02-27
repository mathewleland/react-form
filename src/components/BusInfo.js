import React from 'react';
import { Router, Route, IndexRoute, browserHistory, Link, withRouter } from 'react-router';

class BusInfo extends React.Component {

  constructor() {
    super();

    this.state = {
      phone: "",
      streetAddress: "",
      city: "",
      usState: "",
      zip: "",
      website: "",
      industry: ""
    };

    // this.completeStep = this.completeStep.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // completeStep(event) {
  //   event.preventDefault();
  //
  //   const data = {
  //     phone: this.phone.value,
  //     streetAddress: this.streetAddress.value,
  //     city: this.city.value,
  //     usState: this.usState.value,
  //     zip: this.zip.value,
  //     website: this.website.value,
  //     industry: this.industry.value
  //   }
  //
  //   this.props.saveValues(data)
  //   this.props.nextStep()
  // }

  handleSubmit(e) {
    e.preventDefault();
    const busInfoData = this.state;
    this.props.processBusInfo({busInfoData}); // connected via basics_container (defined in actions)
  }


    // <h1> {this.props.session.basicsData.firstName || 'Now'}, tell us how to contact {this.props.session.basicsData.businessName || "your business"} </h1>
  render() {
    return (
      <div className='container'>
        <br />

          <form ref={(input) => this.questions = input}>

            <div className="group">
              <input type="text" ref={(input) => this.phone = input} defaultValue={ this.state.phone } required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Business Phone number (xxx-xxx-xxxx)</label>
            </div>

            <div className="group">
              <input type="text" ref={(input) => this.streetAddress = input} defaultValue={ this.state.streetAddress } required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Business Street Address</label>
            </div>

            <div className="group">
              <input type="text" ref={(input) => this.city = input} defaultValue={ this.state.city }  required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>City</label>
            </div>

            <div className="group">
              <input type="text" ref={(input) => this.usState = input} defaultValue={ this.state.usState }  required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>State</label>
            </div>

            <div className="group">
              <input type="text" ref={(input) => this.zip = input} defaultValue={ this.state.zip }  required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Zip Code</label>
            </div>

            <div className="group">
              <input type="text" ref={(input) => this.website = input} defaultValue={ this.state.website }  required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Website URL - if you already have one</label>
            </div>

            <div className="group">
              <input type="text" ref={(input) => this.industry = input} defaultValue={ this.state.industry }  required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Industry (could be drop down menu instead?)</label>
            </div>


              <ul className='form-fields'>
                <li className="form-footer">
                  <Link className="btn -default" to="/Basics">Back</Link>
                  <button className="btn -primary pull-right" onClick={this.handleSubmit}>Next Step</button>
                </li>
              </ul>


          </form>

      </div>
    );

  }

}

export default BusInfo;
