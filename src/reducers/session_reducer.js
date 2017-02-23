import merge from 'lodash/merge';
import { hashHistory } from 'react-router';
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

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);

  switch(action.type) {
    case PROCESS_BASICS:
      hashHistory.push("/businfo");
      return merge({}, action.basicsDetails);
    case PROCESS_BUSINFO:
      hashHistory.push("/account");
      return merge({}, action.basicsDetails);
    case PROCESS_ACCOUNT:
      hashHistory.push("/extended");
      return merge({}, action.accountDetails);
    case PROCESS_EXTENDED:
      hashHistory.push("/confirm");
      return merge({}, action.extendedDetails);
    case PROCESS_CONFIRM:
      hashHistory.push("/success");
      return merge({}, action.confirmDetails);
    case PROCESS_SUCCESS:
      return merge({}, action.successDetails);
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
