import React, { Component } from 'react';

import './landing.container.scss'
import cargoTruck from '../../../../assets/img/cargoTruck.jpg'

class LandingContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="gradient-img">
          <span className="gradient" />
          <img className="landing-img-0" src={cargoTruck} />
        </div>
      </React.Fragment>
    )
  }
}

export {
  LandingContainer
}
