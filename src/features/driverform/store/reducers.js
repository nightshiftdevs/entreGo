import { combineReducers } from 'redux';

/**
 * Create Reducer
 **/

import { initialState } from './state';

import {
  driverTypes
} from './constants';

const addDriver = (state = initialState, action) => {
  switch (action.type) {
    case driverTypes.SAVE_DRIVER: {
      const { payload: { response } } = action;
      return Object.assign({}, state, {
        LastDriver: response
      });
    }
    case driverTypes.SAVE_ALL_DRIVERS: {
      const { payload: { response } } = action;
      return Object.assign({}, state, {
        AllDrivers: [...state.AllDrivers, response]
      });
    }
    default:
      return state
  }
}

const driversReducers = combineReducers({
  addDriver
})

export {
  driversReducers
}
