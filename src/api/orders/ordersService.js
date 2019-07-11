import { Service } from '../core/coreService';

class OrderService {
  createOrder(url, body) {
    return Service.post(url, body);
  }

  deleteOrder(id) {
    return Service.delete(id);
  }

  getOrder(url, config, body) {
    return Service.post(url, config, body);
  };

  updateOrder(url, config, body) {
    return Service.post(url, config, body);
  }

  getAllOrders(url) {
    return Service.get(url);
  }
}

export {
  OrderService
};
