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

  saveOrder(id, body) {
    return Service.put(id, body);
  }

  getAllOrders(url) {
    return Service.get(url);
  }
}

export {
  OrderService
};
