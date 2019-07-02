import React, { Component } from "react";

import {
  Main
} from '../../../../../components';

import { Order4Container } from "../order4/order4.container";
import { DashboardDriverLayout } from "../driver/dashoard.component";

class Order4Layout extends Component {

  render() {
    return (
      <DashboardDriverLayout>
        <Main>
          <Order4Container />
        </Main>
      </DashboardDriverLayout>
    )
  }

};

export {
  Order4Layout
}
