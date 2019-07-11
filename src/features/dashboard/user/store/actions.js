import {
  types
} from './constants';

import {
  OrderService,
  ordersUrls
} from '../../../../api';


// alert types

import {
  alertTypes,
  returnErrors,
  createMessage
} from '../../../../components/alerts';

const orderService = new OrderService();

// GET ORDER
const getOrder = (username) => dispatch => {

  // Headers
  const config = {
    headers: {
      'content-Type': 'application/json'
    }
  }

  // Request Body
  const body = JSON.stringify({ username })

  orderService.getOrder(ordersUrls.orderDetail, body, config)
    .then(res => {
      dispatch({
        type: types.GET_ORDER,
        payload: res.data
      });
    }).catch(err => {
      dispatch({
        type: types.GET_ORDER_ERROR
      });
      dispatch(returnErrors(err.response.data, err.response.status));
    });
}

// CHANGE ORDER's STATUS
const changeOrderStatus = (orderUpdated) => dispatch => {

  // Headers
  const config = {
    headers: {
      'content-Type': 'application/json'
    }
  }

  // Request Body
  const body = JSON.stringify(orderUpdated)

  orderService.updateOrder(ordersUrls.changeOrderStatus, body, config)
    .then(res => {
      dispatch({
        type: types.CHANGE_STATUS,
        payload: res.data
      });
      console.log('IF CREATED',res.data)
    }).catch(err => {
      dispatch({
        type: types.GET_ORDER_ERROR
      });
      dispatch(returnErrors(err.response.data, err.response.status));
    });
}

export {
  getOrder,
  changeOrderStatus
}
