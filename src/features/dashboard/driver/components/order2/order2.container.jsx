import React, { Component } from 'react'
import { MapLayout } from '../../../../../components';

import './order2.container.scss'

import userPlaceHolder from '../../../../../assets/img/userplaceholder.png'

import {
  UIbutton
} from '../../../../../ui';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faTruck,
  faGlasses,
  faHandHoldingUsd
} from '@fortawesome/free-solid-svg-icons';

class Order2Container extends Component {
  render() {
    return (
      <div className="order-2">
        <MapLayout />
        <div>
          <div className="order-btn-2">
            <UIbutton className="order-accept-btn" name="button" variant="contained" color="primary" fullWidth={true}>I ARRIVED</UIbutton>
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
