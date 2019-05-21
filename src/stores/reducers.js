import { combineReducers } from 'redux';
import { driversReducers } from '../features/driverform/store/reducers';

const rootReducer = combineReducers({
  driversReducers
});

export {
  rootReducer
}

