import React, { Component } from "react";

import {
  Main,
  Aside
} from '../../../../../components';

import { DriverDashboard } from "../driver/driver.container";

class DriverLayout extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container-dashboard">
        <Aside />
        <div className="main-dashboard">
          <Main>
            <DriverDashboard />
          </Main>
        </div>
      </div>
    )
  }

};

export {
  DriverLayout
}
