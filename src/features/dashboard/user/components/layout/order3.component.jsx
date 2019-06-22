import React, { Component } from "react";

import {
  Main,
  Aside
} from '../../../../../components';

import { OrderClient3Container } from "../order3/order3.container";

class OrderClient3Layout extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container-dashboard">
        <Aside />
        <div className="main-dashboard">
          <Main>
            <OrderClient3Container />
          </Main>
        </div>
      </div>
    )
  }

};

export {
  OrderClient3Layout
}
