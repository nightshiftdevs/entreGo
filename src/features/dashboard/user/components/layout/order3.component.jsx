import React, { Component } from "react";

import {
  Main
} from '../../../../../components';

import { OrderClient3Container } from "../order3/order3.container";
import { DashboardUserLayout } from "../user/dashboard.component";

class OrderClient3Layout extends Component {

  render() {
    return (
      <DashboardUserLayout>
        <Main>
          <OrderClient3Container />
        </Main>
      </DashboardUserLayout>
    )
  }
};

export {
  OrderClient3Layout
}
