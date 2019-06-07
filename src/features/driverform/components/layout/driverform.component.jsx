import React, { Component } from "react";

import {
  Header2,
  Main,
  Footer
} from '../../../../components';

import { CreateDriver } from "../driverform/driverform.container";

class DriverFormLayout extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Header2 />
        <Main>
          <CreateDriver />
        </Main>
        <Footer />
      </div>
    )
  }

};

export {
  DriverFormLayout
}
