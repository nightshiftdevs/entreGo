import React from "react";

import {
  Header,
  Main,
  Footer
} from '../../../../components';

import { DriverFormContainer } from "../driverform/driverform.container";

function DriverFormLayout() {
  return (
    <div>
      <Header />
      <Main>
        <DriverFormContainer />
      </Main>
      <Footer />
    </div>
  )
};

export {
  DriverFormLayout
}
