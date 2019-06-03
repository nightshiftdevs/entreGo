import React, { Component, Fragment } from "react";
import "./assets/styles/main.scss";

import { Routes } from './routes';

import { Provider } from 'react-redux';

import { store } from './stores';

/* To verify if a user is logged in if not it won't allow people 
   to enter driver's or users' dashboard */
import { loadUser } from './features/login/store/actions';

/* To manage alerts in login and signup */
import { Provider as AlertProvider } from 'react-alert';
/* Template reference for alert popups */
import AlertTemplate from 'react-alert-template-basic';

/* Alert options */
const alertOptions = {
  timeout: 3000,
  position: 'top center'
}

class App extends Component {
  // To verify if a user's token is still stored in localStorage
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <div className="Wrapper">
        <Provider store={store}>
          <AlertProvider template={AlertTemplate}
            {...alertOptions}>
              <Routes />
          </AlertProvider>
        </Provider>
      </div>
    )
  }
}

export {
  App
};
