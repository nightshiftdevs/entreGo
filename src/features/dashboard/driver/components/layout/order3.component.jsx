import React, { Component } from "react";

import {
  Main
} from '../../../../../components';

import { Order3Container } from "../order3/order3.container";
import { DashboardDriverLayout } from "../driver/dashoard.component";

class Order3Layout extends Component {

  render() {
    return (
      <DashboardDriverLayout>
        <Main>
          <Order3Container />
        </Main>
      </DashboardDriverLayout>
    )
  }

};

export {
  Order3Layout
}
