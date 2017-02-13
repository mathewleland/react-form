import React from 'react';
import { render } from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class EntryForm extends React.Component {

  constructor() {
    super();

    this.completeBasics = this.completeBasics.bind(this);
    this.completeDetails = this.completeDetails.bind(this);
    this.completeAccount = this.completeAccount.bind(this);
    this.renderBasics = this.renderBasics.bind(this);
    this.renderDetails = this.renderDetails.bind(this);
    this.renderAccount = this.renderAccount.bind(this);
    this.renderData = this.renderData.bind(this);
    this.renderDataList = this.renderDataList.bind(this);

    this.state = {
      basicsComplete: false,
      detailsComplete: false,
      accountComplete: false,
      data: {}
    }
  }

  completeBasics(event) {
    event.preventDefault();
    //validate basic fields on production use
    //save those to localStorage

    const newData = {...this.state.data};
    newData.ownerName = this.ownerName.value;
    newData.businessName = this.businessName.value;

    this.setState({
      data : newData,
      basicsComplete: true
    });
    this.basicsForm.reset();
  }

  completeDetails(event) {
    event.preventDefault();
    //validate the detail fields on production use
    //save to local storage
    const newData = {...this.state.data};
    newData.phone = this.phone.value;
    newData.streetAddress = this.streetAddress.value;
    newData.city = this.city.value;
    newData.zip = this.zip.value;
    newData.currentURL = this.currentURL.value;

    this.setState({
      data: newData,
      detailsComplete: true
    });
    this.detailsForm.reset();
  }

  completeAccount(event) {
    event.preventDefault();
    const newData = {...this.state.data};
    newData.email = this.email.value;
    newData.password = this.password.value;

    this.setState({
      data: newData,
      accountComplete: true
    });
    this.AccountForm.reset();
  }



  renderBasics() {
    return (
        <form ref={(input) => this.basicsForm = input} className='basics form'>
          My name is <input ref={(input) => this.ownerName = input} type="text" name='ownerName' placeholder='First and Last' size='20'  />
          <br />
          and I would like to take <input ref={(input) => this.businessName = input} type='text' name='businessName' placeholder='Sample Business' size='25'/> <br />
          further into the digital age.
          <br /><br />

          <button onClick={this.completeBasics}> Next <i className="fa fa-arrow-right" aria-hidden="true"></i> </button>

        </form>
    )
  }

  renderDetails() {
    return (
        <form action="" ref={(input) => this.detailsForm = input}>

          Business phone number: <input ref={(input) => this.phone = input} type="text" name='phone' placeholder='xxx-xxx-xxxx' size='12'/><br />
          Street Address: <input ref={(input) => this.streetAddress = input} type='text' name='streetAddress' placeholder='1600 Pennsylvania Ave' size='25'/> <br />
          City: <input ref={(input) => this.city = input} type='text' name='city' placeholder='Folsom' size='12' /> , California
          <input ref={(input) => this.zip = input} type='text' name='zipCode' placeholder='95123' size='6'/> <br /> <br />
          Already have a site? Enter the link below <br /><input ref={(input) => this.currentURL = input}type='text' name='currentURL' placeholder='currentSite.com/ifApplicable' size='30' />


          <br /><br />

          <button onClick={this.completeDetails}> Next  <i className="fa fa-arrow-right" aria-hidden="true"></i> </button>

        </form>
    )
  }

  renderAccount() {
    return (
      <form ref={(input) => this.AccountForm = input}>
        Email address: <input ref={(input) => this.email = input} type='email' name='email' placeholder='jenny@california.gov' size='25' /> <br />
        Create a password: <input ref={(input) => this.password = input} type='password' name='password' placeholder='8-20 characters' size='20' /> <br />
        Confirm password: <input type='password' name='password2' placeholder='must match above' size='20' /> <br /> <br />

        <button onClick={this.completeAccount}> Finish <i className='fa fa-check-square' aria-hidden='true'></i> </button>

      </form>
    )
  }

  renderDataList(key) {
    const property = this.state.data[key];
    return (
      <li>
        {key} : {this.state.data[key]}
      </li>
    )
  }

  renderData() {
    return (
      <div>
      {Object.keys(this.state.data).map(this.renderDataList)}
      </div>
    )
  }



  render() {

    if (!this.state.basicsComplete) {
      return (
        <div>
        {this.renderBasics()}

        <br /> <br />
        <p className="info"> Note: none of these forms are backed up anywhere, use any fake data you like </p>
        </div>
      )
    }

    if (!this.state.detailsComplete) {
      return (
        <ReactCSSTransitionGroup
          transitionName="order"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>

        {this.renderDetails()}

        </ReactCSSTransitionGroup>
      )
    }

    if (!this.state.accountComplete) {
      return (
        <div>
          {this.renderAccount()}
        </div>
      )
    }

    return (
      <div>
        <p className='info'> **The data Locable can now use to create an account, in key/value pairs below.  These are stored in a React state object, which we can then just pass along to a back end database </p>
        <p className='info'> **Right now none of this data is being backed up, so simply refreshing the page will clear all data </p>

        <ul> Data = {this.renderData()} </ul>
      </div>
    )

  }
}

export default EntryForm;
