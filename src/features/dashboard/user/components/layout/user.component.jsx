import React, { Component } from 'react'
import { OrderUserContainer } from '../order/order.container'
import { MapUser1Layout } from '../../../../../components'

import './user.component.scss';

class UserLayout extends Component {
  render() {
    return (
      <div>
        Hola user
        <OrderUserContainer />
        <div className="user-order">
          <MapUser1Layout />
        </div>
      </div>
    )
  }
}

export {
  UserLayout
};
