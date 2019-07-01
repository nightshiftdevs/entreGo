import axios from 'axios';
import { entregoBaseUrl } from '../../environment';

const Service = axios.create({
  baseURL: entregoBaseUrl });

export {
  Service
}
