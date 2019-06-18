import { UserService, userUrls } from '../../../api';

const userService = new UserService();

import {
  clientTypes
} from './constants';

const saveClient = (response) => {
  return {
    type: clientTypes.SAVE_CLIENT,
    payload: {
      response
    }
  }
}

const saveAllClients = (response) => {
  return {
    type: clientTypes.SAVE_ALL_CLIENTS,
    payload: {
      response
    }
  }
}

const error = (err) => {
  return {
    type: clientTypes.SAVE_ALL_CLIENTS,
    payload: {
      err
    }
  }
}

const requestCreateClient = (body) => {
  return (dispatch, getState) => {
    userService
      .createUser(userUrls.createClients, body)
      .then(response => {
        dispatch(saveClient(body));
        dispatch(saveAllClients(body));
      }).catch((err) => {
        dispatch(error(err))
      })
  }
};

export {
  saveClient,
  saveAllClients,
  requestCreateClient
}

