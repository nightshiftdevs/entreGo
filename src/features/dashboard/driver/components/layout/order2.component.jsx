import React, { Component } from "react";

import {
  Main
} from '../../../../../components';

import { Order2Container } from "../order2/order2.container";
import { DashboardDriverLayout } from "../driver/dashoard.component";

class Order2Layout extends Component {

  componentDidMount() {
    let currentOrder = JSON.parse(localStorage.getItem('current'));
    this.setState(currentOrder);
  }

  render() {
    return (
      <DashboardDriverLayout>
        <Main>
          <Order2Container {...this.state} />
        </Main>
      </DashboardDriverLayout>
    )
  }
};

export {
  Order2Layout
}
