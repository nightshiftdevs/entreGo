import React, { Component } from "react";

import {
  Main,
  Aside
} from '../../../../../components';

import { OrderContainer } from "../order/order.container";
import { OrderService, ordersUrls } from '../../../../../api'
import socketInstance from "../../../../../api/socket/socket-instance";
import { DashboardDriverLayout } from "../driver/dashoard.component";

let orderService = new OrderService();

class OrderLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    orderService.getAllOrders(ordersUrls.listOrders).then((res) => {
      this.setState({
        data: res.data.list
      })
    });

    // ESCUCHA "REGISTRO_ORDEN", HACER FETCH DE ORDENES
    socketInstance.instance.emit('conductor', 'conectado');
    socketInstance.instance.on('Registro_orden', value => {
      console.log('REGISTRO', value);
      orderService.getAllOrders(ordersUrls.listOrders).then((res) => {
        this.setState({
          data: res.data.list
        })
      });
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
      <DashboardDriverLayout>
        <Main>
          {
            this.createOrders()
          }
        </Main>
      </DashboardDriverLayout>
    )
  }

};

export {
  OrderLayout
}
