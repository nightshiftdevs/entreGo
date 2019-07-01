import { combineReducers } from 'redux';
import { driversReducers } from '../features/driverform/store/reducers';
import { clientsReducers } from '../features/userform/store/reducers';
import { auth } from '../features/login/store/reducers';
import { clientsMapReducers } from '../features/dashboard/user/store/reducers';
import {
  errors,
  messages
} from '../components/alerts'

const rootReducer = combineReducers({
  auth,
  errors,
  messages,
  driversReducers,
  clientsReducers,
  clientsMapReducers 
});

export {
  rootReducer
}

