import React, { Component } from "react";
import "./assets/styles/main.scss";

import { Routes } from './routes';

import { Provider } from 'react-redux';

import { store } from './stores';

import { loadUser } from './features/login/store/actions';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <div className="Wrapper">
        <Provider store={store}>
          <Routes />
        </Provider>
      </div>
    )
  }
}

export {
  App
};
