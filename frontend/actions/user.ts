'use server';

import axios from 'axios';
import { API_URL } from '@/config';

axios.defaults.withCredentials = true;

export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(API_URL + '/login', {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.log('Login failed:', error);
    throw error;
  }
}

export const getUser = async () => {
  try {
    const response = await axios.get(API_URL + `/user/data`);
    return response.data;
  } catch (error) {
    console.log('Error fetching user data:', error);
    throw error;
  }
};

