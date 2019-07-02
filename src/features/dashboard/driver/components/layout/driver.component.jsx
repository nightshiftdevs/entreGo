import React, { Component } from "react";

import {
  Main
} from '../../../../../components';

import { DriverDashboard } from "../driver/driver.container";
import { DashboardDriverLayout } from "../driver/dashoard.component";

class DriverLayout extends Component {
  
  render() {
    return (
      <DashboardDriverLayout>
        <Main>
          <DriverDashboard />
        </Main>
      </DashboardDriverLayout>
    )
  }
};

export {
  DriverLayout
}
