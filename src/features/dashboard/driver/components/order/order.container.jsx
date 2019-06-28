import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MapDriver1Layout } from '../../../../../components';

import './order.container.scss'

import userPlaceHolder from '../../../../../assets/img/userplaceholder.png'
import { driver } from '../../../../../helpers/urls';

import {
  UIbutton
} from '../../../../../ui';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faLocationArrow,
  faTruck,
  faGlasses,
  faHandHoldingUsd
} from '@fortawesome/free-solid-svg-icons';

class OrderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Ricardo',
      orderID: '123',
      roleID: '2',
      isDone: false,
      inRoom: false
    }
    this.takeOrder = this.takeOrder.bind(this);
  }

  takeOrder() {
    this.setState({
      isDone: true,
      inRoom: true
    });
  };

  render() {

    return (
      <div className="order">
        <MapDriver1Layout />
        <div>
          <div className="order-user">
            <img className="order-data-userphoto" src={userPlaceHolder} alt="user photo" />
            <p className="order-data-client">{this.state.username}</p>
          </div>
          <div className="order-data">
            <p className="order-data-label"><FontAwesomeIcon icon={faMapMarkerAlt} /> Start address:</p>
            <p className="order-data-content">My start destination is too long so I can test how will it look Dpto. 1504</p>
          </div>
          <div className="order-data">
            <p className="order-data-label"><FontAwesomeIcon icon={faLocationArrow} /> Dest. address:</p>
            <p className="order-data-content">My final destination is too long so I can test how will it look</p>
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
            <UIbutton component={Link} to={driver.order2} className="order-accept-btn" name="button" variant="contained" color="primary"><FontAwesomeIcon icon={faHandHoldingUsd} />&nbsp; $ 19.95 - ACCEPT</UIbutton>
            <UIbutton className="order-cancel-btn" name="button" color="default" onClick={this.takeOrder}>CANCEL</UIbutton>
          </div>
        </div>
      </div>
    );
  }
}

export {
  OrderContainer
}
