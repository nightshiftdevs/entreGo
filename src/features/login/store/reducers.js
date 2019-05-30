import { initialState } from './state';
import {types} from './constants'

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      const { payload: { response } } = action;

      return Object.assign({}, state, {
        user: response,
        isLoggedIn: true
      });

    }
    default:
      return state
  }
}

export {
  loginReducer
}
