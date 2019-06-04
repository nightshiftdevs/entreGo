import axios from 'axios';
import { entregoBaseUrl } from '../../enviroment';

const Service = axios.create({
  baseURL: entregoBaseUrl });

export {
  Service
}
