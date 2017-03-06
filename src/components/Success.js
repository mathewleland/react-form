import React from 'react';

class Success extends React.Component {

  render() {
    return (
      <div className='container'>
        <h1> Successfully created your account, thank you! </h1>
        <p> An email will be sent to <b>{localStorage.email || "[no email provided]"}</b> for further information </p>

        <button className="btn -default -reset" onClick={this.props.startOver}>Clear all data on the browser and start over</button> <br/><br/>
        <small> The function in the above button would be done automatically on submission, but can be done manually in case you want to see what Local Storage looks like at this point</small>
      </div>
    )
  }
}

export default Success;
