import { Service } from '../service';

class AuthService extends Service {
  
  getToken(id) {
    return this.request({
      url: `users/${id}`
    })
  }
}

export default new AuthService();
