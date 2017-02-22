import React from 'react';
// import { render } from 'react-dom';

class BusInfo extends React.Component {

  constructor() {
    super();
    this.completeStep = this.completeStep.bind(this);
  }

  completeStep(event) {
    event.preventDefault();

    const data = {
      phone: this.phone.value,
      streetAddress: this.streetAddress.value,
      city: this.city.value,
      usState: this.usState.value,
      zip: this.zip.value,
      website: this.website.value,
      industry: this.industry.value
    }

    this.props.saveValues(data)
    this.props.nextStep()
  }


  render() {
    return (
      <div className='container'>
        <h1> {this.props.userData.firstName || 'Now'}, tell us how to contact {this.props.userData.businessName || "your business"} </h1>
        <br />

          <form ref={(input) => this.questions = input}>

            <div className="group">
              <input type="text" ref={(input) => this.phone = input} defaultValue={ this.props.userData.phone } required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Business Phone number (xxx-xxx-xxxx)</label>
            </div>

            <div className="group">
              <input type="text" ref={(input) => this.streetAddress = input} defaultValue={ this.props.userData.streetAddress } required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Business Street Address</label>
            </div>

            <div className="group">
              <input type="text" ref={(input) => this.city = input} defaultValue={ this.props.userData.city }  required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>City</label>
            </div>

            <div className="group">
              <input type="text" ref={(input) => this.usState = input} defaultValue={ this.props.userData.usState }  required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>State</label>
            </div>

            <div className="group">
              <input type="text" ref={(input) => this.zip = input} defaultValue={ this.props.userData.zip }  required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Zip Code</label>
            </div>

            <div className="group">
              <input type="text" ref={(input) => this.website = input} defaultValue={ this.props.userData.website }  required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Website URL - if you already have one</label>
            </div>

            <div className="group">
              <input type="text" ref={(input) => this.industry = input} defaultValue={ this.props.userData.industry }  required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Industry (could be drop down menu instead?)</label>
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

export default BusInfo;
