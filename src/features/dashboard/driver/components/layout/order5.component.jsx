import React, { Component } from "react";

import {
  Main,
  Aside
} from '../../../../../components';

import { Order5Container } from "../order5/order5.container";
import { DashboardDriverLayout } from "../driver/dashoard.component";

class Order5Layout extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <DashboardDriverLayout>
        <Main>
          <Order5Container order={this.state} />
        </Main>
      </DashboardDriverLayout>
    )
  }
};

export {
  Order5Layout
}
