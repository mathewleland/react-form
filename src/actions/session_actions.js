
export const PROCESS_BASICS = "PROCESS_BASICS";
export const PROCESS_BUSINFO = "PROCESS_BUSINFO";
export const PROCESS_ACCOUNT = "PROCESS_ACCOUNT";
export const PROCESS_EXTENDED = "PROCESS_EXTENDED";
export const PROCESS_SUCCESS = "PROCESS_SUCCESS";
export const PROCESS_PLAN = "PROCESS_PLAN";

export const processPlan = planDetails => ({
  type: PROCESS_PLAN,
  planDetails
});

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
