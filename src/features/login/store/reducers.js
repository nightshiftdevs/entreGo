import { initialState } from './state';
import { types } from './constants'

function auth (state = initialState, action) {
  switch (action.type) {
    case types.USER_LOADING:
      return {
        ...state,
        isLoading: true,
        roleID: action.payload
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
          localStorage.setItem('roleID', action.payload.user.roleID);
          return {
            ...state,
            ...action.payload,
            roleID: action.payload.user.roleID,
            isAuthenticated: true,
            isLoading: false
          }
        case types.AUTH_ERROR:
        case types.LOGIN_FAILED:
        case types.LOGOUT_SUCESS:
          localStorage.removeItem('token');
          localStorage.removeItem('roleID');
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
