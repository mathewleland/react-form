import { signup } from '../util/session_api_util';
// import { browserHistory } from 'react-router';
import { receiveCurrentUser,
         receiveErrors,
         SIGNUP
       } from '../actions/session_actions';

export default ({ getState, dispatch }) => next => action => {
  const successCallback = user => dispatch(receiveCurrentUser(user));
  const errorCallback = xhr => dispatch(receiveErrors(xhr.responseJSON));

  switch(action.type) {
    case SIGNUP:
      signup(action.user, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
