import merge from 'lodash/merge';
import { hashHistory } from 'react-router';
import {
  PROCESS_BASICS,
  PROCESS_ACCOUNT,
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
      return merge({}, action.basicsDetails);
    case PROCESS_ACCOUNT:
      return merge({}, action.accountDetails);
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
