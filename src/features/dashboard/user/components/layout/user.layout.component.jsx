import React, { Component } from 'react'
import { OrderFormContainer } from '../order/order.container'
import { MapUser1Layout } from '../../../../../components/maps/mapUser1/map.component'
import './form.component.scss';

class UserDashboardLayout extends Component {
  render() {
    return (
      <div>
        Hola user
        <OrderFormContainer />
        <div className="userOrder">
          <MapUser1Layout />
        </div>
      </div>
    )
  }
}

export {
  UserDashboardLayout
};
