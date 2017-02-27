import React from 'react';
import { Router, Route, IndexRoute, browserHistory, Link, withRouter } from 'react-router';

class Extended extends React.Component {
  constructor() {
    super();

    this.state = {
      facebook: "",
      twitter: "",
      yelp: ""
    };
    // this.completeStep = this.completeStep.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // completeStep(event) {
  //   event.preventDefault();
  //
  //   const data = {
  //     facebook: this.facebook.value,
  //     twitter: this.twitter.value,
  //     yelp: this.yelp.value,
  //
  //   }
  //
  //   this.props.saveValues(data)
  //   this.props.nextStep()
  // }
  handleSubmit(e) {
    e.preventDefault();
    const extendedDetails = this.state;
    this.props.processExtended({extendedDetails}); // connected via basics_container (defined in actions)
  }


  // <h1> {this.props.userData.firstName}, could you tell us more about {this.props.userData.businessName || "your business"}?</h1>
  render() {
    return (
      <div className='container'>
        <p> All fields are optional.  If you do not have a given page, feel free to skip it </p>
        <br />

          <form ref={(input) => this.questions = input}>

            <div className="group">
              <input type="text" ref={(input) => this.facebook = input} defaultValue={ this.state.facebook } required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label> <i className="fa fa-facebook" aria-hidden="true"></i> Facebook page</label>
            </div>

            <div className="group">

              <input type="text" ref={(input) => this.twitter = input} defaultValue={ this.state.twitter } required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label> <i className="fa fa-twitter" aria-hidden="true"></i> Twitter page</label>
            </div>

            <div className="group">

              <input type="text" ref={(input) => this.yelp = input} defaultValue={ this.state.yelp  } required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label> <i className="fa fa-yelp" aria-hidden="true"></i> Yelp page</label>
            </div>

            <div className="group">
              <input type="text" ref={(input) => this.hours = input} defaultValue={ this.state.hours } required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>this will be a table of store hours</label>
            </div>


              <ul className='form-fields'>
                <li className="form-footer">
                  <button className="btn -default " onClick={this.props.prevStep}>Back</button>
                  <button className="btn -primary pull-right" onClick={this.handleSubmit}>Next Step</button>
                </li>
              </ul>


          </form>

      </div>
    )

  }

}

export default Extended;
