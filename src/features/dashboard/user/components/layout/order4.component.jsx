import React, { Component } from "react";

import {
  Main
} from '../../../../../components';

import { OrderClient4Container } from "../order4/order4.container";
import { DashboardUserLayout } from "../user/dashboard.component";

class OrderClient4Layout extends Component {

  render() {
    return (
      <DashboardUserLayout>
        <Main>
          <OrderClient4Container />
        </Main>
      </DashboardUserLayout>
    )
  }
};

export {
  OrderClient4Layout
}
