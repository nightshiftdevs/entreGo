import { combineReducers } from 'redux';
import { driversReducers } from '../features/driverform/store/reducers';
import { auth } from '../features/login/store/reducers';

const rootReducer = combineReducers({
  driversReducers, auth
});

export {
  rootReducer
}

