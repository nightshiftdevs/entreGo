import React, { Component } from "react";

import {
  Main,
  Aside
} from '../../../../../components';

import { OrderClient4Container } from "../order4/order4.container";

class OrderClient4Layout extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container-dashboard">
        <Aside />
        <div className="main-dashboard">
          <Main>
            <OrderClient4Container />
          </Main>
        </div>
      </div>
    )
  }

};

export {
  OrderClient4Layout
}
