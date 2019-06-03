import { alertTypes } from './constants';
import { initialState } from './state';

function errors(state = initialState, action) {
  switch (action.type) {
    case alertTypes.GET_ERRORS:
      return {
        msg: action.payload.msg,
        status: action.payload.status
      };
    default:
      return state;
  }
};

function messages(state = {}, action) {
  switch (action.type) {
    case alertTypes.CREATE_MESSAGE:
        return (state = action.payload);
    default:
      return state;
  }
};

export {
  errors,
  messages
};
