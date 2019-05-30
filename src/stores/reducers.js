import { combineReducers } from 'redux';
import { driversReducers } from '../features/driverform/store/reducers';
import { loginReducer } from '../features/login/store/reducers';

const rootReducer = combineReducers({
  driversReducers, loginReducer
});

export {
  rootReducer
}

