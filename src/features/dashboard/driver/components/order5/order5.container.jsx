import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './order5.container.scss'
import { driver } from '../../../../../helpers/urls';
import cargoTruck from '../../../../../assets/img/cargoTruck.jpg'

import {
  UIbutton
} from '../../../../../ui';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTruck,

} from '@fortawesome/free-solid-svg-icons';
import {
  faCheckCircle
} from '@fortawesome/free-regular-svg-icons';

class Order5Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false
    }
  }

  componentDidMount() {
    let currentOrder = JSON.parse(localStorage.getItem('current'));
    this.setState(currentOrder);
  }

  componentDidUpdate() {
    if (this.state.ready !== true) {
      this.setState({ ready: true });
    }
  }

  render() {
    return (
      <div className="order-5">
        <div className="gradient-img-driver-order">
          <span className="gradient" />
          <img className="driver-img-2" src={cargoTruck} alt="Cargo truck" />
        </div>
        <div className="total-earned">
          <div>
            <h2>Congratulations!</h2>
            <h4>You win:</h4>
            <div className="border-earned-money">
              <p className="earned-money">{this.state.ready ? `$${this.state.cost}` : '20 $'}</p>
            </div>
          </div>

          <div className="check-circle">
            <FontAwesomeIcon icon={faCheckCircle} />
          </div>

        </div>
        <div>
          <div className="order-btn-5">
            <UIbutton component={Link} to={driver.dashboard} className="order-accept-btn" name="button" variant="contained" color="primary" fullWidth={true}>
              ACCEPT &nbsp;<FontAwesomeIcon icon={faTruck} /></UIbutton>
          </div>
        </div>
      </div>
    );
  }
}

export {
  Order5Container
}
