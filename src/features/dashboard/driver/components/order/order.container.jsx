import React, { Component } from 'react'
import { MapLayout } from '../../../../../components';

import './order.container.scss'

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

class OrderContainer extends Component {
  render() {
    return (
      <div className="order">
        <MapLayout />
        <div>
          <div className="order-user">
            <img className="order-data-userphoto" src={userPlaceHolder} alt="user photo" />
            <p className="order-data-client">A really really long name</p>
          </div>
          <div className="order-data">
            <p className="order-data-label"><FontAwesomeIcon icon={faMapMarkerAlt} /> Dest. address:</p>
            <p className="order-data-content">My final destination is too long so I can test how will it look Dpto. 1504</p>
          </div>
          <div className="order-data">
            <p className="order-data-label"><FontAwesomeIcon icon={faTruck} /> Cargo volume:</p>
            <p className="order-data-content">245 m3</p>
          </div>
          <div className="order-data">
            <p className="order-data-label"><FontAwesomeIcon icon={faGlasses} /> Observation:</p>
            <p className="order-data-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima in, atque, iste sed autem</p>
          </div>
          <div className="order-btn">
            <UIbutton className="order-accept-btn" name="button" variant="contained" color="primary"><FontAwesomeIcon icon={faHandHoldingUsd} /> 19.95 S/. ACCEPT</UIbutton>
            <UIbutton className="order-cancel-btn" name="button" color="default">CANCEL</UIbutton>
          </div>
        </div>
      </div>
    );
  }
}

export {
  OrderContainer
}
