import React, { Component } from "react";

import {
  Main,
  Aside
} from '../../../../../components';

import { Order2Container } from "../order2/order2.container";

class Order2Layout extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container-dashboard">
        <Aside />
        <div className="main-dashboard">
          <Main>
            <Order2Container />
          </Main>
        </div>
      </div>
    )
  }

};

export {
  Order2Layout
}
