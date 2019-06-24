import React, { Component } from "react";

import {
  Main,
  Aside
} from '../../../../../components';

import { OrderClient6Container } from "../order6/order6.container";

class OrderClient6Layout extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container-dashboard">
        <Aside />
        <div className="main-dashboard">
          <Main>
            <OrderClient6Container />
          </Main>
        </div>
      </div>
    )
  }

};

export {
  OrderClient6Layout
}
