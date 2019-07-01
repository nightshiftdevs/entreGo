import React, { Component } from 'react'

import './loader1.component.scss'
import cargoTruck from '../../assets/img/cargoTruck.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';

class Loader1 extends Component {
  render() {
    return (
      <div className="loader-1">
        <div className="gradient-img-loader">
          <span className="gradient" />
          <img className="loader-img-1" src={cargoTruck} alt="Cargo truck" />
        </div>
        <div className="order-title">
          <h2>Waiting</h2>
          <h2>for driver</h2>
          <div className="loader-icon">
            <FontAwesomeIcon icon={faSpinner} pulse/>
          </div>
        </div>
      </div>
    );
  }
}

export {
  Loader1
}
