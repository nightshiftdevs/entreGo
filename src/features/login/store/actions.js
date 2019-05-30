import {
  types
} from './constants';

const login = (response) => {
  return {
    type: types.LOGIN_REQUEST,
    payload: {
      response
    }
  }
}

export {
  login
}
