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
      console.log(res.data);
    }).catch(err => {
      dispatch({
        type: types.GET_ORDER_ERROR
      });
      dispatch(returnErrors(err.response.data, err.response.status));
    });
}

export {
  getOrder
}
