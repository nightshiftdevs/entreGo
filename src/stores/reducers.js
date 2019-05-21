import { initialState } from './state';
import {
  SAVE_DRIVER,
  SAVE_ALL_DRIVERS
} from './consts';

const Driver = (state = initialState, action) => {
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

export {
  Driver
}
