import React from "react";

import {
  Main,
  Footer
} from '../../../../components';

import { CreateDriver } from "../driverform/driverform.container";

function DriverFormLayout() {
  return (
    <div>
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
