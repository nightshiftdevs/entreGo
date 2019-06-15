import React, { Component } from "react";

import {
  Header,
  Main,
  Footer
} from '../../../../components';

import { LandingContainer } from '../landing/landing.container'

class LandingLayout extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Header />
        <Main>
          <LandingContainer />
        </Main>
        <Footer />
      </div>
    )
  }

};

export {
  LandingLayout
}
