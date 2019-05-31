import {
  types
} from './constants';

import AuthService from '../../../api/auth/auth.service';

/* const login = (response) => {
  return {
    type: types.LOGIN_REQUEST,
    payload: {
      response
    }
  }
} */

// CHECK TOKEN & LOAD USER
const loadUser = (dispatch, getState) => {
  // User Loading
  dispatch({ type: types.USER_LOADING });

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

  AuthService
    .getToken(id)
    .then(response => {
      dispatch(login(response));
      history.replace('/home')
      console.log('woww')
    }
    ).catch((err) => {
      console.log('bad request!', err);
    })

  axios.get('/api/auth/user', config)
    .then(res => {
      dispatch({
        type: types.USER_LOADED,
        payload: res.data
      });
    }).catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: types.AUTH_ERROR
      });
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

  axios
    .post('/api/auth/login', body, config)
    .then(res => {
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: res.data
      });
    }).catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: types.LOGIN_FAILED
      });
    });
}

export {
  loadUser,
  login
}
