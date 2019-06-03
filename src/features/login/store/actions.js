import {
  types
} from './constants';

import {
  AuthService,
  authUrls
} from '../../../api';

// alert types

import {
  alertTypes,
  returnErrors,
  createMessage
} from '../../../components/alerts';

const authService = new AuthService();

// CHECK TOKEN & LOAD USER
const loadUser = () => (dispatch, getState) => {
  // User Loading
  dispatch({ type: types.USER_LOADING });

  // Get token from state
  const token = getState().auth.token
 
  // Headers
  const config = {
    headers: {
      'content-Type': 'application/json'
    }
  };
  // If token, add to headers config
  if (token!=='null') {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  
  authService.getToken(authUrls.getTokenUrl, config)
  .then(res => {
    dispatch({
      type: types.USER_LOADED,
      payload: res.data
    });
  }).catch(err => {
    console.log('error in catch', err);
    dispatch({
      type: types.AUTH_ERROR
    });
    dispatch(returnErrors(err.response.data, err.response.status));
  });
}

// LOGIN USER
const login = (username, password) => dispatch => {
  // Headers
  const config = {
    headers: {
      'content-Type': 'application/json'
    }
  }
  // Request Body
  const body = JSON.stringify({ username, password })

  authService.checkToken(authUrls.checkTokenUrl, body, config)
    .then(res => {
      dispatch(createMessage({Loggedin: "Bienvenido!"}));
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: res.data
      });
      
    }).catch(err => {
      dispatch({
        type: types.LOGIN_FAILED
      });
      dispatch(returnErrors(err.response.data, err.response.status));
   
    });
}

// LOGOUT USER

const logout = () => (dispatch, getState) => {

  // Get token from state
  const token = getState().auth.token

  // Headers
  const config = {
    headers: {
      'content-Type': 'application/json'
    }
  }
  // If token, add to headers config
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  authService.logout(authUrls.logout, null, config)
    .then(res => {
      dispatch({
        type: types.LOGOUT_SUCESS
      });
    }).catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
}

export {
  loadUser,
  login,
  logout
}
