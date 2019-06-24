import React, { Component } from "react";

import {
  Main,
  Aside
} from '../../../../../components';

import { OrderClient5Container } from "../order5/order5.container";

class OrderClient5Layout extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container-dashboard">
        <Aside />
        <div className="main-dashboard">
          <Main>
            <OrderClient5Container />
          </Main>
        </div>
      </div>
    )
  }

};

export {
  OrderClient5Layout
}
