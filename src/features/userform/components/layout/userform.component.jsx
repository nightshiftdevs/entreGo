import React from "react";

import {
  Header,
  Main,
  Footer
} from '../../../../components';

import { UserFormContainer } from '../userform/userform.container'

function UserFormLayout() {
  return (
    <div>
      <Header />
      <Main>
        <UserFormContainer />
      </Main>
      <Footer />
    </div>
  )
};

export {
  UserFormLayout
}
