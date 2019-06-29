import { Service } from '../core/coreService';

class OrderService {
  createOrder(url, body) {
    return Service.post(url, body);
  }

  deleteOrder(id) {
    return Service.delete(id);
  }

  getOrder(id) {
    return Service.get(id);
  }

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
