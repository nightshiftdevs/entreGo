import React, { Component } from "react";

import {
  Main,
  Aside
} from '../../../../../components';

import { OrderContainer } from "../order/order.container";
import { OrderService, ordersUrls } from '../../../../../api'
let orderService = new OrderService();

class OrderLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    orderService.getAllOrders(ordersUrls.listOrders).then((res) => {
      this.setState({
        data: res.data.list
      })
    });
  }

  createOrders() {
    const Orders = this.state.data.map((props, id) => {
      return <OrderContainer {...props} key={id} />
    });

    return Orders;
  }

  render() {

    return (
      <div className="container-dashboard">
        <Aside />
        <div className="main-dashboard">
          <Main>
            {
              this.createOrders()
            }
          </Main>
        </div>
      </div>
    )
  }

};

export {
  OrderLayout
}
