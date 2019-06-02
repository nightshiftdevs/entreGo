import React from "react";

import {
  Header,
  Main,
  Footer
} from '../../../../components';

import { Login } from '../login/login.container';

function LoginLayout() {
  return (
    <div>
      <Header />
      <Main>
        <Login />
      </Main>
      <Footer />
    </div>
  )
};

export {
  LoginLayout
}
