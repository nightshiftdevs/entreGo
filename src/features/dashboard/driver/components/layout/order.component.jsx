import React, { Component } from "react";

import {
  Main,
  Aside
} from '../../../../../components';

import { OrderContainer } from "../order/order.container";
import { OrderService, ordersUrls } from '../../../../../api'
import socketInstance from "../../../../../api/socket/socket-instance";


import io from 'socket.io-client';
import {entregoBaseUrl} from '../../../../../environment';
import {socketUrl} from '../../../../../api';

const urlSocket = `${entregoBaseUrl}${socketUrl.connectSocket}`;
const socket = io.connect(urlSocket);

let orderService = new OrderService();

class OrderLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    
    socket.on('Registro_orden', value => {
      console.log(value);
    })

  }

  componentDidMount() {
    window.scrollTo(0, 0);
    orderService.getAllOrders(ordersUrls.listOrders).then((res) => {
      this.setState({
        data: res.data.list
      })
    });

    // ESCUCHA "REGISTRO_ORDEN", HACER FETCH
    console.log(socketInstance.instance);
    console.log(socket);

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
