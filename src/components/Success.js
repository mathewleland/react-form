import React from 'react';

class Success extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1> Successfully created your account, thank you! </h1>
        <p> An email will be sent to <b>{this.props.userData.email || "[Invalid email]"}</b> for further information </p>
      </div>
    )
  }
}

export default Success;