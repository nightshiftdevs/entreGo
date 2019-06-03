import { alertTypes } from "./constants";

// CREATE MESSAGE
const createMessage = msg => {
  return {
    type: alertTypes.CREATE_MESSAGE,
    payload: msg
  };
};

// RETURN ERRORS
const returnErrors = (msg, status) => {
  return {
    type: alertTypes.GET_ERRORS,
    payload: { msg, status }
  };
};

export {
  createMessage,
  returnErrors
}
