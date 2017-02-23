import React from 'react';

class Basics extends React.Component {

  constructor() {
    super();
    this.completeStep = this.completeStep.bind(this);
  }

  completeStep(event) {
    event.preventDefault();

    const data = {
      name: this.name.value,
      firstName: this.name.value.split(' ')[0],
      lastName: this.name.value.split(' ')[1],
      email: this.email.value,
      businessName: this.businessName.value
    }

    this.props.saveValues(data)
    this.props.nextStep()
  }

  // <div className='container'>
  //   <h1> Basic Questions </h1>
  //
  //   <form ref={(input) => this.questions = input}>
  //
  //     <div className="group">
  //       <input type="text" ref={(input) => this.name = input} defaultValue={ this.props.userData.name } required />
  //       <span className="highlight"></span>
  //       <span className="bar"></span>
  //       <label>First and Last Name</label>
  //     </div>
  //
  //     <div className="group">
  //       <input type="text" ref={(input) => this.email = input} defaultValue={ this.props.userData.email } required />
  //       <span className="highlight"></span>
  //       <span className="bar"></span>
  //       <label>Email</label>
  //     </div>
  //
  //     <div className="group">
  //       <input type="text" ref={(input) => this.businessName = input} defaultValue={ this.props.userData.businessName } required />
  //       <span className="highlight"></span>
  //       <span className="bar"></span>
  //       <label>Business Name</label>
  //     </div>
  //
  //     <button onClick={ this.completeStep } className='btn -primary pull-right'> Next Step </button>
  //
  //   </form>
  //
  //
  // </div>

  render() {
    return (
      <div>
        <p>basics</p>
      </div>
    )
  }
}

export default Basics;
