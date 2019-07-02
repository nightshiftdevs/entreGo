import React, { Component } from "react";

import {
  Aside2
} from '../../../../../components';

class DashboardUserLayout extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container-dashboard">
        <Aside2/>
        <div className="main-dashboard">
          {this.props.children}
        </div>
      </div>
    )
  }
};

export {
  DashboardUserLayout
}
