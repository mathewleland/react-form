import React from 'react';
import { Link } from 'react-router';

class BusInfo extends React.Component {

  constructor() {
    super();

    this.state = {
      businessName: "",
      phone: "",
      streetAddress: "",
      city: "",
      usState: "",
      zip: "",
      website: "",
      industry: ""
    };


    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const busInfoData = this.state;
    this.props.processBusInfo({busInfoData}); // connected via basics_container (defined in actions)
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


    // <h1> {this.props.session.basicsData.firstName || 'Now'}, tell us how to contact {this.props.session.basicsData.businessName || "your business"} </h1>
  render() {

    return (
      <div className='container'>


        <h1> Please confirm details about your business</h1>
        <small> (NOTE: If someone grabs a name from a database, these would pre-populate with those values that they could then correct)</small> <br/><br/>


          <form ref={(input) => this.questions = input}>


            <div className="group">
              <input
                type="text"
                value={this.state.businessName}
                onChange={this.update("businessName")}
                required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Organization / Business Name</label>
            </div>

            <div className="group">
              <input
                type="number"
                value={this.state.phone}
                onChange={this.update("phone")}
                required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Business Phone number</label>
            </div>

            <div className="group">
              <input
                type="text"
                value={this.state.streetAddress}
                onChange={this.update("streetAddress")}
                required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Business Street Address</label>
            </div>

            <div className="group">
              <input
                type="text"
                value={this.state.city}
                onChange={this.update("city")}
                required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>City</label>
            </div>

            <div className="group">
              <input
                type="text"
                value={this.state.usState}
                onChange={this.update("usState")}
                required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>State</label>
            </div>

            <div className="group">
              <input
                type="number"
                value={this.state.zip}
                onChange={this.update("zip")}
                required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Zip Code</label>
            </div>

            <div className="group">
              <input
                type="text"
                value={this.state.website}
                onChange={this.update("website")}
                required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Website URL - if you have one</label>
            </div>

            <div className="group">
              <p>Industry (select from dropdown)</p>
              <select
                value={this.state.industry}
                onChange={this.update("industry")}>

               <option value="Auto">Auto</option>
                <option value="Food">Food</option>
                <option value="Food">Many others to be added</option>

            </select>
          </div>


              <ul className='form-fields'>
                <li className="form-footer">
                  <Link className="btn -default" to="/basics">Back</Link>
                  <button className="btn -primary pull-right" onClick={this.handleSubmit}>Next Step</button>
                </li>
              </ul>


          </form>

      </div>
    );

  }

}

export default BusInfo;


// this.completeStep = this.completeStep.bind(this);
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
