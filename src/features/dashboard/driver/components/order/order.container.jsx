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
            <p className="order-data-client">{this.props.firstName} {this.props.lastName}</p>
          </div>
          <div className="order-data">
            <p className="order-data-label"><FontAwesomeIcon icon={faMapMarkerAlt} /> Start address:</p>
            <p className="order-data-content">{this.props.startAddress}</p>
          </div>
          <div className="order-data">
            <p className="order-data-label"><FontAwesomeIcon icon={faLocationArrow} /> Dest. address:</p>
            <p className="order-data-content">{this.props.endAddress}</p>
          </div>
          <div className="order-data">
            <p className="order-data-label"><FontAwesomeIcon icon={faTruck} /> Cargo volume:</p>
            <p className="order-data-content">{this.props.packageVolume} m3</p>
          </div>
          <div className="order-data">
            <p className="order-data-label"><FontAwesomeIcon icon={faGlasses} /> Observation:</p>
            <p className="order-data-content">{this.props.observations}</p>
          </div>
          <div className="order-btn">
            <UIbutton component={Link} to={driver.order2} className="order-accept-btn" name="button" variant="contained" color="primary"><FontAwesomeIcon icon={faHandHoldingUsd} />&nbsp; $ {this.props.cost} - ACCEPT</UIbutton>
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
