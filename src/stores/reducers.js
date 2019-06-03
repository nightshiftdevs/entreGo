import { combineReducers } from 'redux';
import { driversReducers } from '../features/driverform/store/reducers';
import { auth } from '../features/login/store/reducers';
import {
  errors,
  messages
} from '../components/alerts'

const rootReducer = combineReducers({
  auth,
  errors,
  messages,
  driversReducers
});

export {
  rootReducer
}

