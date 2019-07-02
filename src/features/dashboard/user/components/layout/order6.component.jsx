import React, { Component } from "react";

import {
  Main
} from '../../../../../components';

import { OrderClient6Container } from "../order6/order6.container";
import { DashboardUserLayout } from "../user/dashboard.component";

class OrderClient6Layout extends Component {

  render() {
    return (
      <DashboardUserLayout>
        <Main>
          <OrderClient6Container />
        </Main>
      </DashboardUserLayout>
    )
  }
};

export {
  OrderClient6Layout
}
