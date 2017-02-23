export const SIGNUP = "SIGNUP";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const PROCESS_ACCOUNT = "PROCESS_ACCOUNT";
export const PROCESS_BASICS = "PROCESS_BASICS";

export const processBasics = basicsDetails => ({
  type: PROCESS_BASICS,
  basicsDetails
});

export const processAccount = accountDetails => ({
  type: PROCESS_ACCOUNT,
  accountDetails
});

export const signup = user => ({
  type: SIGNUP,
  user
});

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
