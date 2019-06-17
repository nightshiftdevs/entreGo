import React, { Component } from 'react'

import {
  Main,
  Aside
} from '../../../../../components';

import { OrderDashboardContainer } from '../order/order.container'

import './user.component.scss';

class UserLayout extends Component {
  render() {
    return (
      <div className="container-dashboard">
        <Aside />
        <div className="main-dashboard">
          <Main>
            <OrderDashboardContainer />
          </Main>
        </div>
      </div>
    )
  }
}

export {
  UserLayout
};
