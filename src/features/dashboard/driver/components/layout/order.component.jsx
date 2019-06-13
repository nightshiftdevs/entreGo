import React, { Component } from "react";

import {
  Main,
  Aside
} from '../../../../../components';

import { OrderContainer } from "../order/order.container";

class OrderLayout extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container-dashboard">
        <Aside />
        <div className="main-dashboard">
          <Main>
            <OrderContainer />
          </Main>
        </div>
      </div>
    )
  }

};

export {
  OrderLayout
}
