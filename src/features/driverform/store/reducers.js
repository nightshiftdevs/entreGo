import { combineReducers } from 'redux';

/**
 * Create Reducer
 **/
import { initialState } from './state';

import {
  SAVE_DRIVER,
  SAVE_ALL_DRIVERS
} from './constants';

const addDriver = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_DRIVER: {
      const { payload: { response } } = action;
      return Object.assign({}, state, {
        LastDriver: response
      });
    }
    case SAVE_ALL_DRIVERS: {
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
