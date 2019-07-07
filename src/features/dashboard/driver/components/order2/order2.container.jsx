import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { MapDriver2Layout } from '../../../../../components';

import './order2.container.scss'
import { driver } from '../../../../../helpers/urls';

import {
  UIbutton
} from '../../../../../ui';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTruck,
} from '@fortawesome/free-solid-svg-icons';
import socketInstance from '../../../../../api/socket/socket-instance';

class Order2Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.arrivedStartLocation = this.arrivedStartLocation.bind(this);
  }

  componentDidMount() {
    let currentOrder = JSON.parse(localStorage.getItem('current'));
    this.setState(currentOrder);
  }

  arrivedStartLocation() {
    socketInstance.instance.emit('driver_arrived', this.state.orderID);
  }

  render() {
    console.log('PROPS MAPA', this.props);
    return (
      <div className="order-2">
        <MapDriver2Layout {...this.props} />
        <div>
          <div className="order-btn-2">
            <UIbutton onClick={this.arrivedStartLocation} component={Link} to={driver.order3} className="order-accept-btn" name="button" variant="contained" color="primary" fullWidth={true}>
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
