import { combineReducers } from 'redux';

/**
 * Create Reducer
 **/

import { initialState } from './state';

import {
  clientTypes
} from './constants';

const addClient = (state = initialState, action) => {
  switch (action.type) {
    case clientTypes.SAVE_CLIENT: {
      const { payload: { response } } = action;
      return Object.assign({}, state, {
        LastClient: response
      });
    }
    case clientTypes.SAVE_ALL_CLIENTS: {
      const { payload: { response } } = action;
      return Object.assign({}, state, {
        AllClients: [...state.AllClients, response]
      });
    }
    default:
      return state
  }
}

const clientsReducers = combineReducers({
  addClient
})

export {
  clientsReducers
}
