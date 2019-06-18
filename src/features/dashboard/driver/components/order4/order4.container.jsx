import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { MapDriver3Layout } from '../../../../../components';

import './order4.container.scss'
import { driver } from '../../../../../helpers/urls';

import {
  UIbutton
} from '../../../../../ui';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTruck,
} from '@fortawesome/free-solid-svg-icons';

class Order4Container extends Component {
  render() {
    return (
      <div className="order-4">
        <MapDriver3Layout />
        <div>
          <div className="order-btn-4">
            <UIbutton component={Link} to={driver.order5} className="order-accept-btn" name="button" variant="contained" color="primary" fullWidth={true}>
            I ARRIVED &nbsp;<FontAwesomeIcon icon={faTruck} /></UIbutton>
          </div>
        </div>
      </div>
    );
  }
}

export {
  Order4Container
}
