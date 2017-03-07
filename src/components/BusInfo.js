import React from 'react';
import { browserHistory } from 'react-router';
// import { render } from 'react-dom';

class BusInfo extends React.Component {

  constructor() {
    super();
    this.completeStep = this.completeStep.bind(this);
    this.changeIndustry = this.changeIndustry.bind(this);
  }

  completeStep(event) {
    event.preventDefault();
    if (localStorage.plan !== "build") {
      localStorage.setItem('plan', 'engage')
    }
    localStorage.setItem('businessName', this.businessName.value)
    localStorage.setItem('phone', this.phone.value)
    localStorage.setItem('streetAddress', this.streetAddress.value)
    localStorage.setItem('city', this.city.value)
    localStorage.setItem('usState', this.usState.value)
    localStorage.setItem('zip', this.zip.value)
    localStorage.setItem('website', this.website.value)

    if (localStorage.phone && localStorage.streetAddress && localStorage.usState) browserHistory.push("/account")
  }

  changeIndustry(value) {
    localStorage.setItem('industry', value)
  }


  render() {
    return (
      <div className='container'>
        <h1> Please confirm the details below </h1>
        <small> (NOTE: If someone grabs a name from a database, these would pre-populate with those values that they could then correct)</small> <br/><br/><br/><br/>

          <form>

            <div className="group">
              <input type="text" ref={(input) => this.businessName = input} defaultValue={ localStorage.businessName } required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Organization / Business Name</label>
            </div>

            <div className="group">
              <input type="text" ref={(input) => this.phone = input} defaultValue={ localStorage.phone } required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Business Phone number</label>
            </div>

            <div className="group">
              <input type="text" ref={(input) => this.streetAddress = input} defaultValue={ localStorage.streetAddress } required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Business Street Address</label>
            </div>

            <div className="group">
              <input type="text" ref={(input) => this.city = input} defaultValue={ localStorage.city }  required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>City</label>
            </div>

            <div className="group">
              <input type="text" ref={(input) => this.usState = input} defaultValue={ localStorage.usState }  required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>State</label>
            </div>

            <div className="group">
              <input type="text" ref={(input) => this.zip = input} defaultValue={ localStorage.zip }  required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Zip Code</label>
            </div>

            <div className="group">
              <input type="text" ref={(input) => this.website = input} defaultValue={ localStorage.website } />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Website URL - if you already have one</label>
            </div>

            <div className="group">
              <p>Industry (select from dropdown)</p>
              <select
                onChange={(e) => {localStorage.industry = e.target.value}}
                >
                  <option value="Auto">Auto</option>
                  <option value="Food">Food</option>
                  <option value="Tech">Tech</option>
                  <option value="Other">Other</option>

              </select>
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

export default BusInfo;
