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

import socketInstance from "../../../../../api/socket/socket-instance";

class OrderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.takeOrder = this.takeOrder.bind(this);
  }
  componentDidMount() {
    this.setState(this.props);
  }

  takeOrder() {
    let userType = localStorage.getItem('roleID');
    let driverName = JSON.parse(localStorage.getItem('driverDetails'))[0].firstName;
    let driverDetail = JSON.parse(localStorage.getItem('driverDetails'));
    socketInstance.instance.emit('take_order', {orderID: this.props.orderID, driver: driverDetail});
    let properties = Object.assign({},
      this.state,
      {
        isDone: true,
        inRoom: true
      },
      { userType },
      { username: driverName },
      { driverDetails: driverDetail });
    localStorage.setItem('current', JSON.stringify(properties));
  };

  render() {

    return (
      <div className="order">
        <MapDriver1Layout {...this.props}/>
        <div className="order-card">
          <div className="order-user">
            <img className="order-data-userphoto" src={userPlaceHolder} alt="user photo" />
            <p className="order-data-client">{this.props.firstName} {this.props.lastName}</p>
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
            <UIbutton onClick={this.takeOrder} component={Link} to={driver.order2} className="order-accept-btn" name="button" variant="contained" color="primary"  ><FontAwesomeIcon icon={faHandHoldingUsd} />&nbsp; $ {this.props.cost} - ACCEPT</UIbutton>
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
