import React, { Component } from 'react';

import './order.container.scss'
import history from '../../../../../history';
import { client } from '../../../../../helpers/urls';
import cargoTruck from '../../../../../assets/img/cargoTruck.jpg'

import { OrderComponent } from '../layout/order.component'
import { MapUser1Layout } from '../../../../../components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTruck
} from '@fortawesome/free-solid-svg-icons';
import socketInstance from '../../../../../api/socket/socket-instance';

class OrderDashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startAddress: '',
      endAddress: '',
      startLat: '',
      startLng: '',
      endLat: '',
      endLng: '',
      cargoVolume: '',
      obs: '',
      cost: Math.floor(Math.random() * (100 * 100 - 1 * 100) + 1 * 100) / (1 * 100),

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    socketInstance.instance.emit('Registro_orden', true);
    socketInstance.instance.on('conductor', value => {
      console.log('CONDUCTOR', value);
    });

    history.push(client.order2);
  }

  onMouseUp() {
    this.setState({
      log: [`onMouseUp`, ...this.state.log]
    })
  }

  render() {
    return (
      <div className="user-order">
        <div className="gradient-img-driver-order">
          <span className="gradient" />
          <img className="driver-img-1" src={cargoTruck} alt="Cargo truck" />
        </div>
        <div className="order-title">
          <h2>Start your cargo &nbsp; &nbsp; &nbsp; &nbsp;<FontAwesomeIcon icon={faTruck} /></h2>
        </div>
        <OrderComponent handleSubmit={(e) => { this.handleSubmit(e) }} handleChange={(e) => { this.handleChange(e) }} />
        <MapUser1Layout />
      </div>
    )
  }
}

export {
  OrderDashboardContainer
}
