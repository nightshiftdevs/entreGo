import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import history from '../../../../../history';

import './order7.container.scss'
import { client } from '../../../../../helpers/urls';
import cargoTruck from '../../../../../assets/img/cargoTruck.jpg'

import {
  UIbutton
} from '../../../../../ui';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTruck
} from '@fortawesome/free-solid-svg-icons';

// To connect the changeOrderStatus with this component
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeOrderStatus } from '../../store/actions';

class OrderClient7Logic extends Component {
  constructor(props) {
    super(props);
    this.changeStatus = this.changeStatus.bind(this);
  }
  
  changeStatus() {
    this.props.changeOrderStatus({
      orderID: this.props.orderID,
      orderStatusID: 2
    });
    history.replace(client.dashboard);
  }
  render() {
    return (
      <div className="order-7">
        <div className="gradient-img-driver-order">
          <span className="gradient" />
          <img className="driver-img-7" src={cargoTruck} alt="Cargo truck" />
        </div>
        <div className="order-title">
          <h2>Your</h2>
          <h2>driver arrived</h2>
          <h2>at the</h2>
          <h2>destination !</h2>
        </div>
        <div>
          <div className="order-btn-7">
            <UIbutton onClick={this.changeStatus} className="order-accept-btn" name="button" variant="contained" color="primary" fullWidth={true}>
              ACCEPT &nbsp;<FontAwesomeIcon icon={faTruck} /></UIbutton>
          </div>
        </div>

      </div>
    );
  }
}

OrderClient7Logic.PropTypes = {
  changeOrderStatus: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  orderID: state.clientsMapReducers.orderID
})

const OrderClient7Container = connect(mapStateToProps, { changeOrderStatus })(OrderClient7Logic)

export {
  OrderClient7Container
}
