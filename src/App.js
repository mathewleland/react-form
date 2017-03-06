import React from 'react';
import './App.css';
import { browserHistory } from 'react-router'
import Basics from './components/Basics';
import BusInfo from './components/BusInfo';
import Account from './components/Account';
import Confirm from './components/Confirm';
import Success from './components/Success';

class App extends React.Component {

  constructor() {
    super()

    this.startOver = this.startOver.bind(this)
  }

  startOver(e) {
    e.preventDefault()
    localStorage.clear()
    browserHistory.push('lookup')
  }

  render() {

      if (!localStorage.lookup) {
        return <Basics/>
      }
      else if (!localStorage.phone || !localStorage.businessName) {
        return <BusInfo />
      }
      else if (!localStorage.lastName) {
        return <Account />
      }
      else if (!localStorage.confirmed) {
        return <Confirm startOver={this.startOver}/>
      }
      else if (localStorage.confirmed === "true") {
        return <Success startOver={this.startOver}/>
      }
  }
}

export default App;

// let userData = {
//   name: null,
//   firstName: null,
//   lastName: null,
//   email: null,
//   businessName: null,
//   phone: null,
//   streetAddress: null,
//   city: "Folsom",
//   usState: "California",
//   zip: null,
//   website: null,
//   industry: null,
//   facebook: null,
//   twitter: null,
//   yelp: null,
//   password: null
//
// };

// constructor() {
//   super();
//
//   this.state = {
//     step: 1
//   };
//
// }

// getinitialState() {
//   return {
//     step: 1
//   }
// }

// this.saveValues = this.saveValues.bind(this);
// this.nextStep = this.nextStep.bind(this);
// this.prevStep = this.prevStep.bind(this);

// nextStep() {
//   this.setState({
//     step: this.state.step + 1
//   })
// }

// prevStep() {
//   this.setState({
//     step: this.state.step - 1
//   })
// }
// return (
//   <div>
//     {React.cloneElement(this.props.children, {userData:{userData}, saveValues:{saveValues}})}
//   </div>
// )

// saveValues(data) {
//   userData = Object.assign({}, userData, data)
// }


// switch (this.state.step) { //switch on teh user data.  if userData.firstName is null, then we return basics. if phone has value, return account
//   case 1:
//     return <Basics userData={userData}
//
//                    saveValues={this.saveValues} />
//   case 2:
//    return <BusInfo userData={userData}
//
//                   saveValues={this.saveValues} />
//   case 3:
//     return <Account userData={userData}
//
//                    saveValues={this.saveValues} />
//   case 4:
//     return <Extended userData={userData}
//
//                       saveValues={this.saveValues} />
//
//   case 5:
//     return <Confirm userData={userData}
//
//                     submitRegistration={this.submitRegistration} />
//
//   case 6:
//     return <Success userData={userData} />
//
//   default:
//     return (<div>Add a link here to go back to the first page, maybe reset state to 1</div>)
// }
