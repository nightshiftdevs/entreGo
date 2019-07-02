import React, { Component } from "react";

import {
  Main
} from '../../../../../components';

import { OrderClient7Container } from "../order7/order7.container";
import { DashboardUserLayout } from "../user/dashboard.component";

class OrderClient7Layout extends Component {

  render() {
    return (
      <DashboardUserLayout>
        <Main>
          <OrderClient7Container />
        </Main>
      </DashboardUserLayout>
    )
  }
};

export {
  OrderClient7Layout
}
