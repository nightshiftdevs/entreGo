import io from 'socket.io-client';
import {entregoBaseUrl} from '../../environment';
import {socketUrl} from '../../api';

const urlSocket = `${entregoBaseUrl}${socketUrl.connectSocket}`;

class SocketInstance {
  constructor(){
    if (SocketInstance.instance){
      return SocketInstance;
    }
    SocketInstance.instance = io.connect(urlSocket);
    return SocketInstance;
  }
}

export default new SocketInstance();
