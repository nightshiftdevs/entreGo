import React, { Component } from "react";

import {
  Main,
  Aside,
  Loader1
} from '../../../../../components';

import { OrderClient2Container } from "../order2/order2.container";
import { addClassToEvent } from '../../../../../helpers/dom';

class OrderClient2Layout extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);

    addClassToEvent('js_loader', 'click', 'order-client-2', 'display-none', 'loader-1', 'display-none')
  }

  render() {
    return (
      <div className="container-dashboard">
        <Aside />
        <div className="main-dashboard">
          <Main>
            <Loader1 />
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
