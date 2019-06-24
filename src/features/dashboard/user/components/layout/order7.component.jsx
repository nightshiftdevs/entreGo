import React, { Component } from "react";

import {
  Main,
  Aside
} from '../../../../../components';

import { OrderClient7Container } from "../order7/order7.container";

class OrderClient7Layout extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container-dashboard">
        <Aside />
        <div className="main-dashboard">
          <Main>
            <OrderClient7Container />
          </Main>
        </div>
      </div>
    )
  }

};

export {
  OrderClient7Layout
}
