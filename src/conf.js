import axios from 'axios';

require('dotenv').config();

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: false,
});

api.interceptors.request.use((config) => {
  return {
    ...config,
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  };
});

export default api;
