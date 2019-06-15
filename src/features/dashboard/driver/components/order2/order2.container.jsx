import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { MapDriver2Layout } from '../../../../../components';

import './order2.container.scss'

import {
  UIbutton
} from '../../../../../ui';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTruck,
} from '@fortawesome/free-solid-svg-icons';

class Order2Container extends Component {
  render() {
    return (
      <div className="order-2">
        <MapDriver2Layout />
        <div>
          <div className="order-btn-2">
            <UIbutton component={Link} to="/dashboard/driver/order-3" className="order-accept-btn" name="button" variant="contained" color="primary" fullWidth={true}>
            I ARRIVED &nbsp;<FontAwesomeIcon icon={faTruck} /></UIbutton>
            <UIbutton className="order-cancel-btn" name="button" color="default" fullWidth={true}>CANCEL</UIbutton>
          </div>
        </div>
      </div>
    );
  }
}

export {
  Order2Container
}
