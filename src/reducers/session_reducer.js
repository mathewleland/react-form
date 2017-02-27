import merge from 'lodash/merge';
import { browserHistory } from 'react-router';
import {
  PROCESS_BASICS,
  PROCESS_BUSINFO,
  PROCESS_ACCOUNT,
  PROCESS_EXTENDED,
  PROCESS_CONFIRM,
  PROCESS_SUCCESS,
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS } from '../actions/session_actions';

const _nullUser = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case PROCESS_BASICS:
      browserHistory.push("/businfo");
      const basicsDetails = action.basicsDetails;
      return merge({}, state, {basicsDetails});
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
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, _nullUser, { currentUser });
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _nullUser, { errors });
    default:
      return state;
  }
};

export default SessionReducer;
