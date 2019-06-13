import { UserService, userUrls } from '../../../api';

const userService = new UserService();

import {
  driverTypes
} from './constants';

const saveDriver = (response) => {
  return {
    type: driverTypes.SAVE_DRIVER,
    payload: {
      response
    }
  }
}

const saveAllDrivers = (response) => {
  return {
    type: driverTypes.SAVE_ALL_DRIVERS,
    payload: {
      response
    }
  }
}

const error = (err) => {
  return {
    type: driverTypes.SAVE_ALL_DRIVERS,
    payload: {
      err
    }
  }
}

const requestCreateDriver = (body) => {
  return (dispatch, getState) => {
    userService
      .createUser(userUrls.createDrivers, body)
      .then(response => {
        dispatch(saveDriver(body));
        dispatch(saveAllDrivers(body));
      }).catch((err) => {
        dispatch(error(err))
      })
  }
};

export {
  saveDriver,
  saveAllDrivers,
  requestCreateDriver
}

