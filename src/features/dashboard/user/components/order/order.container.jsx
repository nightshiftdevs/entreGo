import React, { Component } from 'react';

import { OrderComponent } from '../layout/order.component'
import { MapUser1Layout } from '../../../../../components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTruck
} from '@fortawesome/free-solid-svg-icons';

class OrderDashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startAdress: '',
      destinationAdress: '',
      cargoVolume: '',
      obs: ''
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
    console.log('state order', this.state)
  }

  onMouseUp() {
    this.setState({
      log: [`onMouseUp`, ...this.state.log]
    })
  }

  render() {
    return (
      <div className="user-order">
        <h2>Start your cargo <FontAwesomeIcon icon={faTruck} /></h2>
        <OrderComponent handleSubmit={(e) => { this.handleSubmit(e) }} handleChange={(e) => { this.handleChange(e) }} />
        <MapUser1Layout />
      </div>
    )
  }
}

export {
  OrderDashboardContainer
}
