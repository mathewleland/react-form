import React from 'react';
// import { Router, Route, IndexRoute, browserHistory, Link, withRouter } from 'react-router';



class Basics extends React.Component {

  constructor() {
    super();

    this.state = {
      businessName: "",
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderMatches = this.renderMatches.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const basicsDetails = this.state;
    this.props.processBasics({basicsDetails}); // connected via basics_container (defined in actions)
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderMatches() {
    let search = this.state.businessName;

    if (search==="pizza") {
      return (
        <div>
          <div className="result search-result">
            <h4> Paul's Pizza</h4>
            <p>Address: 123 Fake St</p>
            <p>Folsom, CA</p>
            <div className="result-button" onClick={this.handleSubmit}> This is it </div>
          </div>

          <div className="result search-result">
            <h4> Ray's Pizza</h4>
            <p>Address: 22 Fake St</p>
            <p>Sacramento, CA</p>
            <div className="result-button" onClick={this.handleSubmit}> This is it </div>
          </div>
        </div>

      )
    }
    if (search==="laundry") {
      return (
        <div className="result search-result">
          <h4> Larry's laundry</h4>
          <p>Address: 123 Fake Ave</p>
          <p>Folsom, CA</p>
          <div className="result-button" onClick={this.handleSubmit}> This is it </div>
        </div>
      )
    }
    else {
      return (
        <div className="result no-result">
          <h4> Can't find your business?</h4>
          <br />
          <br />
          <div className="result-button" onClick={this.handleSubmit}> Add it manually </div>
        </div>
      )
    }
  }



  render() {

    return (
      <div className='container'>
        <h1> What is the name of your business? </h1>

        <form className='lookup-form'>

          <div className="group">
            <input
              type="text"
              value={this.state.businessName}
              onChange={this.update("businessName")}
                />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Business Name</label>
          </div>




        </form>

        {this.renderMatches()}
      </div>
    );
  }
}

export default Basics;

//<button onClick={ this.renderMatches } className='btn -primary pull-right'> Look up </button>
// this.completeStep = this.completeStep.bind(this);
// completeStep(event) {
//   event.preventDefault();
//
//   const data = {
//     name: this.name.value,
//     firstName: this.name.value.split(' ')[0],
//     lastName: this.name.value.split(' ')[1],
//     email: this.email.value,
//     businessName: this.businessName.value
//   };
//
//   this.props.saveValues(data);
//   this.props.nextStep();
// }
