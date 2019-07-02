import React, { Component } from "react";

import {
  Aside
} from '../../../../../components';

class DashboardDriverLayout extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container-dashboard">
        <Aside/>
        <div className="main-dashboard">
          {this.props.children}
        </div>
      </div>
    )
  }
};

export {
  DashboardDriverLayout
}
