import { combineReducers } from 'redux';

/**
 * Create Reducer
 */
import { initialState } from './state';
import { SAVE_DRIVER } from './action';

const addDriver = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_DRIVER: {
      const { payload: { response } } = action;
      return Object.assign({}, state, {Drivers: Last});
    }
    default:
      return state
  }
}

const createDriverReducer = combineReducers({
  addDriver
})

export {
  createDriverReducer
}
