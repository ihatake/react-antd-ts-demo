import axios from 'axios';

import API from './api';

axios.defaults.withCredentials = true;

const service = axios.create({});
service.interceptors.request.use(config => {
  return config;
});
service.interceptors.response.use(res => {
  if (res.data.code === '-2') {
    window.location.href = '/login';
  }
  return res;
});

export const login = (params = {}) => {
  return service.post(API.LOGIN, params);
};

export const getUserInfo = (params = {}) => {
  console.log('getUserInfo');
  return service.get(API.USER_INFO, { params });
};
