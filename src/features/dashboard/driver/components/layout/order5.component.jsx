import React, { Component } from "react";

import {
  Main,
  Aside
} from '../../../../../components';

import { Order5Container } from "../order5/order5.container";

class Order5Layout extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container-dashboard" >
        <Aside />
        <div className="main-dashboard">
          <Main>
            <Order5Container order={this.state} />
          </Main>
        </div>
      </div>
    )
  }

};

export {
  Order5Layout
}
