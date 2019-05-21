import UserService from '../../../api/userService';

const SAVE_DRIVER = '[DRIVER_FORM] SAVE_DRIVER';
const saveDriver = (response) => {
  return {
    type: SAVE_DRIVER,
    payload: {
      response
    }
  }
}

const requestCreateDriver = (body) => {
  return (dispatch, getState) => {
    console.log('body', body)
    console.log('getState', getState())
    UserService
      .createUser(JSON.stringify(body))
      .then(response => {
        dispatch(saveDriver(response));
      })
  }
}

export {
  SAVE_DRIVER,
  requestCreateDriver
}
