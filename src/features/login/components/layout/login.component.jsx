import React from "react";

import {
  Header,
  Main,
  Footer
} from '../../../../components';

import { LoginContainer } from '../login/login.container'

function LoginLayout() {
  return (
    <div>
      <Header />
      <Main>
        <LoginContainer />
      </Main>
      <Footer />
    </div>
  )
};

export {
  LoginLayout
}
