import axios from 'axios';
import config from './config';

const ax = axios.create({
  baseURL: config.apiUrl,
});

export default ax;
