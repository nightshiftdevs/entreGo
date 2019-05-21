import UserService from '../api/userService';

import {
  SAVE_DRIVER,
  SAVE_ALL_DRIVERS
} from './consts';


const saveDriver = (response) => {
  return {
    type: SAVE_DRIVER,
    payload: {
      response
    }
  }
}

const saveAllDrivers = (response) => {
  return {
    type: SAVE_ALL_DRIVERS,
    payload: {
      response
    }
  }
}

const error = (err) => {
  return {
    type: SAVE_ALL_DRIVERS,
    payload: {
      err
    }
  }
}

const requestCreateDriver = (body) => {
  return (dispatch, getState) => {
    console.log('getState_main', getState())
    UserService
      .createUser(JSON.stringify(body))
      .then(response => {
        dispatch(saveDriver(response));
        dispatch(saveAllDrivers(response))

      }).catch((err) => {
        dispatch(error(err))
      })
  }
}

export {
  saveDriver,
  saveAllDrivers,
  requestCreateDriver
}
