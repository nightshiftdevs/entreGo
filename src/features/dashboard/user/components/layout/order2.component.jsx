import React, { Component } from "react";

import {
  Main,
  Loader1
} from '../../../../../components';

import { OrderClient2Container } from "../order2/order2.container";
import { addClassToEvent } from '../../../../../helpers/dom';
import { DashboardUserLayout } from "../user/dashboard.component";

class OrderClient2Layout extends Component {

  componentDidMount() {
    addClassToEvent('js_loader', 'click', 'order-client-2', 'display-none', 'loader-1', 'display-none')
  }

  render() {
    return (
      <DashboardUserLayout>
        <Main>
          <Loader1 />
          <OrderClient2Container />
        </Main>
      </DashboardUserLayout>
    )
  }
};

export {
  OrderClient2Layout
}
