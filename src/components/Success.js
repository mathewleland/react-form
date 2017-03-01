import React from 'react';
// import { Router, Route, IndexRoute, browserHistory, Link, withRouter } from 'react-router';

class Success extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1> Successfully created your account, thank you! </h1>
        <p> An email will be sent to <b>{this.props.session.accountDetails.accountDetails.email || "[no email given]"}</b> for further information </p>
      </div>
    )
  }
}

export default Success;
