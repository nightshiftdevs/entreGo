import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './order4.container.scss'
import { client } from '../../../../../helpers/urls';
import cargoTruck from '../../../../../assets/img/cargoTruck.jpg'

import {
  UIbutton
} from '../../../../../ui';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTruck
} from '@fortawesome/free-solid-svg-icons';

class OrderClient4Container extends Component {
  render() {
    return (
      <div className="order-4">
        <div className="gradient-img-driver-order">
          <span className="gradient" />
          <img className="driver-img-4" src={cargoTruck} alt="Cargo truck" />
        </div>
        <div className="order-title">
          <h2>Your</h2>
          <h2>driver</h2>
          <h2>arrived !</h2>
        </div>
        <div>
          <div className="order-btn-4">
            <UIbutton component={Link} to={client.order5} className="order-accept-btn" name="button" variant="contained" color="primary" fullWidth={true}>
              ACCEPT &nbsp;<FontAwesomeIcon icon={faTruck} /></UIbutton>
          </div>
        </div>

       
      </div>
    );
  }
}

export {
  OrderClient4Container
}
