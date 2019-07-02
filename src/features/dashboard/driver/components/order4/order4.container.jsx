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
  constructor(props) {
    super(props);
    this.state = {
    }
    this.endService = this.endService.bind(this);
  }

  componentDidMount() {
    let currentOrder = JSON.parse(localStorage.getItem('current'));
    this.setState(currentOrder);
  }

  endService() {
    socketInstance.instance.emit('end_service', this.state.orderID);
  }

  render() {
    return (
      <div className="order-4">
        <MapDriver3Layout />
        <div>
          <div className="order-btn-4">
            <UIbutton onClick={this.endService} component={Link} to={driver.order5} className="order-accept-btn" name="button" variant="contained" color="primary" fullWidth={true}>
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
