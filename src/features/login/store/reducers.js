import { initialState } from './state';
import { types } from './constants'

/* const loginReducer = (state = initialState, action) => {
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
} */

function auth (state = initialState, action) {
  switch (action.type) {
    case types.USER_LOADING:
      return {
        ...state,
        isLoading: true
      }
      case types.USER_LOADED:
        return {
          ...state,
          isAuthenticated: true,
          isLoading: false,
          user: action.payload
        }
        case types.LOGIN_SUCCESS:
          localStorage.setItem('token', action.payload.token);
          return {
            ...state,
            ...action.payload,
            isAuthenticated: true,
            isLoading: false
          }
        case types.AUTH_ERROR:
        case types.LOGIN_FAILED:
          localStorage.removeItem('token');
          return {
            ...state,
            token: null,
            user: null,
            isAuthenticated: false,
            isLoading: false
          }
    default:
      return state;
  }
}

export {
  auth
}
