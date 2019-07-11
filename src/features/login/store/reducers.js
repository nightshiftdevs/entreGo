import { initialState } from './state';
import { types } from './constants'

function auth(state = initialState, action) {
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
      if (action.payload.user.roleID == 2) {
        localStorage.setItem('roleID', action.payload.user.roleID);
      } else {
        localStorage.setItem('roleID', action.payload.user.roleID);
      }
      localStorage.setItem('username', action.payload.user.username);
      return {
        ...state,
        ...action.payload,
        username: action.payload.user.username,
        roleID: action.payload.user.roleID,
        isAuthenticated: true,
        isLoading: false
      }
    case types.AUTH_ERROR:
    case types.LOGIN_FAILED:
    case types.LOGOUT_SUCESS:
      localStorage.removeItem('token');
      localStorage.removeItem('roleID');
      localStorage.clear();
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
