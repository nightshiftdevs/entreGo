import React, { Component } from "react";

import {
  Main,
  Aside
} from '../../../../../components';

import { OrderClient2Container } from "../order2/order2.container";

class OrderClient2Layout extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container-dashboard">
        <Aside />
        <div className="main-dashboard">
          <Main>
            <OrderClient2Container />
          </Main>
        </div>
      </div>
    )
  }

};

export {
  OrderClient2Layout
}
