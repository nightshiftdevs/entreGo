/* import AuthService from '../../../api/auth/auth.service';
import { login } from '../store/actions';
import history from '../../../api/core/history'

const requestLogin = (id) => {
  return (dispatch, getState) => {
    console.log('id of the user', id)
    AuthService
      .getToken(id)
      .then(response => {
        dispatch(login(response));
        history.replace('/home')
        console.log('woww')
      }
      ).catch((err) => {
        console.log('bad request!',err);
      })
  }
}

export {
  requestLogin
} */
