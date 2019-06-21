import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './order2.container.scss'
import { client } from '../../../../../helpers/urls';
import cargoTruck from '../../../../../assets/img/cargoTruck.jpg'

import {
  UIbutton
} from '../../../../../ui';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMoneyBillAlt,
} from '@fortawesome/free-solid-svg-icons';

class OrderClient2Container extends Component {

  constructor(props) {
    super(props);
    this.state = {
      totalCost: '20.15',
    }
  }

  render() {
    return (
      <div className="order-client-2">
        <div className="gradient-img-client-order">
          <span className="gradient" />
          <img className="client-img-1" src={cargoTruck} alt="Cargo truck" />
        </div>
        <div className="total-earned">
          <h2>Total payment</h2>
          <h4>Cash</h4>
          <div className="border-total-cost">
            <p className="total-cost">{this.state.totalCost} $</p>
          </div>
        </div>
        <div>
          <div className="order-btn-2">
            <UIbutton component={Link} to={client.order3} className="order-accept-btn" name="button" variant="contained" color="primary" fullWidth={true}>
              PAY &nbsp;<FontAwesomeIcon icon={faMoneyBillAlt} /></UIbutton>
          </div>
        </div>
      </div>
    );
  }
}

export {
  OrderClient2Container
}
