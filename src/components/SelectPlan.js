import React from 'react';
import { Link } from 'react-router';

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class SelectPlan extends React.Component {
  render() {
    return (
      <div className="plans">

        <div id='engage' className='plan'>
          <h2> Engage </h2>
          <p> Local Marketing Assistant provides recommendations and reminders while built in tools make marketing fast, easy and even fun</p>

          <h1> Free - Seriously! </h1>

          <a href="/basics"><button> Engage Plan </button></a>

          <h4> Includes </h4>
          <ul>
            <li>Virtual Marketing Assistant</li>
            <li>Customer Review Generation</li>
            <small>Up to 5 Requests / month</small>
            <hr/>
            <li>Simple Content Engine</li>
            <small>Events, Offers, Reviews, Quick Pass</small>
            <li>Contacts Database</li>
            <small>Unlimited Companies, up to 100 people</small>
            <hr/>
            <li>Distribution</li>
          </ul>
        </div>


        <div id='build' className='plan'>
          <h2> Build </h2>
          <p>  Build your business with expnanded local marketing tools and a price you can afford</p>

          <h1> $24.99 / month </h1>
          <small> Paid Annually </small> <br />

          <a href="/basics"><button> Build Plan </button></a>

          <h4> Includes </h4>
          <ul>
            <li>Everything in Engage Plus</li>
            <li>Customer Review Generation</li>
            <small>Unlimited Monthly Requests</small>
            <hr/>
            <li>Expanded Content Engine</li>
            <small>Adds 'Before & After' Posts and Gallery</small>
            <li>Expanded Contacts Database</li>
            <small>Organize unlimited companies and up to 500 people with lists & segments and assignable to-do's with reminders</small>
            <hr/>
          </ul>
        </div>


      </div>
    )
  }

}

export default SelectPlan;
