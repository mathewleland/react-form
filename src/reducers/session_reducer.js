import merge from 'lodash/merge';
import { browserHistory } from 'react-router';
import {
  PROCESS_BASICS,
  PROCESS_BUSINFO,
  PROCESS_ACCOUNT,
  PROCESS_EXTENDED,
  PROCESS_CONFIRM,
  PROCESS_SUCCESS,
  PROCESS_PLAN
 } from '../actions/session_actions';


const SessionReducer = (state = {}, action) => {
  Object.freeze(state);

  // let newState;

  switch(action.type) {

    case PROCESS_PLAN:
      browserHistory.push("/basics");
      const planDetails = action.planDetails;
      return merge({}, state, {planDetails});

    case PROCESS_BASICS:
      browserHistory.push("/businfo");
      const basicsDetails = action.basicsDetails;
      return merge({}, state, {basicsDetails})

    case PROCESS_BUSINFO:
      const busInfoDetails = action.busInfoDetails;
      browserHistory.push("/account");
      return merge({}, state, {busInfoDetails});

    case PROCESS_ACCOUNT:
      browserHistory.push("/extended");
      const accountDetails = action.accountDetails;
      return merge({}, state, {accountDetails});

    case PROCESS_EXTENDED:
      browserHistory.push("/confirm");
      const extendedDetails = action.extendedDetails;
      return merge({}, state, {extendedDetails});

    case PROCESS_CONFIRM:
      browserHistory.push("/success");
      const confirmDetails = action.confirmDetails;
      return merge({}, state, {confirmDetails});

    case PROCESS_SUCCESS:
      const successDetails = action.successDetails;
      return merge({}, state, {successDetails});

    default:
      return state;
  }
};

export default SessionReducer;
