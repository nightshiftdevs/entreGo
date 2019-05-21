import React from "react";

import {
  Header,
  Main,
  Footer
} from '../../../../components';

import { CreateDriver } from "../driverform/driverform.container";

function DriverFormLayout() {
  return (
    <div>
      <Header />
      <Main>
        <CreateDriver />
      </Main>
      <Footer />
    </div>
  )
};

export {
  DriverFormLayout
}
