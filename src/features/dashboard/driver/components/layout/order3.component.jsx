import React, { Component } from "react";

import {
  Main,
  Aside
} from '../../../../../components';

import { Order3Container } from "../order3/order3.container";

class Order3Layout extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container-dashboard">
        <Aside />
        <div className="main-dashboard">
          <Main>
            <Order3Container />
          </Main>
        </div>
      </div>
    )
  }

};

export {
  Order3Layout
}
