import { Service } from '../core/coreService';

class AuthService {
  getToken(url, config) {
    return Service.get(url,config);
  };

  checkToken(url, config, body) {
    return Service.post(url,config,body);
  };

  logout(url,body,config){
    return Service.get(url,body,config)
  };

}

  export {
    AuthService
  };
