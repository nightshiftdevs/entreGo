import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './order5.container.scss'
import { driver } from '../../../../../helpers/urls';

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
  render() {
    return (
      <div className="order-5">
        <div className="total-earned">
          <h2>Congratulations!</h2>
          <h4>You win:</h4>
          <div className="border-earned-money">
            <p className="earned-money">20.15 $</p>
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
