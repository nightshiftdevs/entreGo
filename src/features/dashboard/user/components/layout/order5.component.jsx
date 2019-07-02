import React, { Component } from "react";

import {
  Main
} from '../../../../../components';

import { OrderClient5Container } from "../order5/order5.container";
import { DashboardUserLayout } from "../user/dashboard.component";

class OrderClient5Layout extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <DashboardUserLayout>
        <Main>
          <OrderClient5Container />
        </Main>
      </DashboardUserLayout>
    )
  }
};

export {
  OrderClient5Layout
}
