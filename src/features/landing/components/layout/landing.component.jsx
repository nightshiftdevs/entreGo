import React from "react";

import {
  Header,
  Main,
  Footer
} from '../../../../components';

import { LandingContainer } from '../landing/landing.container'

function LandingLayout() {
  return (
    <div>
      <Header />
      <Main>
        <LandingContainer />
      </Main>
      <Footer />
    </div>
  )
};

export {
  LandingLayout
}
