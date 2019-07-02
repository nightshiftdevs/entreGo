import React, { Component } from 'react'

import './user.component.scss';

import {
  Main
} from '../../../../../components';

import { OrderDashboardContainer } from '../order/order.container'
import { DashboardUserLayout } from '../user/dashboard.component';

class UserLayout extends Component {
  render() {
    return (
      <DashboardUserLayout>
        <Main>
          <OrderDashboardContainer />
        </Main>
      </DashboardUserLayout>
    )
  }
}

export {
  UserLayout
};
