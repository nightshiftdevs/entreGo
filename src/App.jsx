import React from "react";
import "./assets/styles/main.scss";

import { Routes } from './routes';

import { Provider } from 'react-redux';

import { store } from './stores';

export function App() {
  return (
    <div className="Wrapper">
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  )
}
