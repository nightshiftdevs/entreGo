import { Service } from '../core/coreService';

class AuthService {
  checkToken(url, config) {
    return Service.get(url,config);
  };

  getToken(url, config, body) {
    return Service.post(url,config,body);
  };

  logout(url,body,config){
    return Service.get(url,body,config)
  };

}

  export {
    AuthService
  };
