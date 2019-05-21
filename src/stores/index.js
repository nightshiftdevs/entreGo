import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Driver } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(Driver, composeWithDevTools(applyMiddleware(thunk)));

export {
  store
}
