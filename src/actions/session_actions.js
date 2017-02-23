export const SIGNUP = "SIGNUP";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const PROCESS_BASICS = "PROCESS_BASICS";
export const PROCESS_BUSINFO = "PROCESS_BUSINFO";
export const PROCESS_ACCOUNT = "PROCESS_ACCOUNT";
export const PROCESS_EXTENDED = "PROCESS_EXTENDED";
export const PROCESS_SUCCESS = "PROCESS_SUCCESS";

export const processBasics = basicsDetails => ({
  type: PROCESS_BASICS,
  basicsDetails
});

export const processBusInfo = busInfoDetails => ({
  type: PROCESS_BUSINFO,
  busInfoDetails
});

export const processAccount = accountDetails => ({
  type: PROCESS_ACCOUNT,
  accountDetails
});
export const processExtended = extendedDetails => ({
  type: PROCESS_EXTENDED,
  extendedDetails
});

export const processSuccess = successDetails => ({
  type: PROCESS_SUCCESS,
  successDetails
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
