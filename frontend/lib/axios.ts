import axios from 'axios';

axios.defaults.withCredentials = true;

// Add a response interceptor
axios.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      // You can also return a custom error message or object
      window.location.href = '/login';
      return Promise.reject(new Error('Not authenticated'));
    }
    return Promise.reject(error);
  }
);

export default axios;