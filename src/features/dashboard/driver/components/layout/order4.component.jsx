import React, { Component } from "react";

import {
  Main,
  Aside
} from '../../../../../components';

import { Order4Container } from "../order4/order4.container";

class Order4Layout extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container-dashboard">
        <Aside />
        <div className="main-dashboard">
          <Main>
            <Order4Container />
          </Main>
        </div>
      </div>
    )
  }

};

export {
  Order4Layout
}
