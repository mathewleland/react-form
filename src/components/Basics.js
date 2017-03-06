import React from 'react';
import { browserHistory } from 'react-router';

class Basics extends React.Component {

  constructor() {
    super();

    this.state = {
      search: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderMatches = this.renderMatches.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem('lookup', 'true');
    localStorage.setItem('businessName', this.state.search)
    browserHistory.push("/businfo")
  }



  renderMatches() {
    const search = this.state.search;

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
              value={this.state.search}
              onChange={this.update("search")}
              />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Name of your business / organization</label>
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

// class Basics extends React.Component {
//
//   constructor() {
//     super();
//     this.completeStep = this.completeStep.bind(this);
//   }
//
//   completeStep(event) {
//     event.preventDefault();
//
//     localStorage.setItem('firstName', this.firstName.value),
//     localStorage.setItem('email', this.email.value),
//     localStorage.setItem('businessName', this.businessName.value)
//
//     if (localStorage.firstName && localStorage.email && localStorage.businessName) browserHistory.push("/businfo")
//
//   }
//
//   render() {
//     return (
//       <div className='container'>
//         <h1> Basic Questions </h1>
//
//         <form ref={(input) => this.questions = input}>
//
          // <div className="group">
          //   <input type="text" ref={(input) => this.firstName = input} defaultValue={ localStorage.firstName } required />
          //   <span className="highlight"></span>
          //   <span className="bar"></span>
          //   <label>First Name</label>
          // </div>
//
//           <div className="group">
//             <input type="text" ref={(input) => this.email = input} defaultValue={ localStorage.email } required />
//             <span className="highlight"></span>
//             <span className="bar"></span>
//             <label>Email</label>
//           </div>
//
//           <div className="group">
//             <input type="text" ref={(input) => this.businessName = input} defaultValue={ localStorage.businessName } required />
//             <span className="highlight"></span>
//             <span className="bar"></span>
//             <label>Business Name</label>
//           </div>
//
//           <Link to="/businfo"><button onClick={ this.completeStep } className='btn -primary pull-right'> Next Step </button></Link>
//
//         </form>
//
//
//       </div>
//     )
//   }
// }
//
// export default Basics;
