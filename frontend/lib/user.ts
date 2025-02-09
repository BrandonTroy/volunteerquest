'use client';

import axios from '@/lib/axios';
import { API_URL } from '@/config';

export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(API_URL + '/login', {
      username,
      password,
    });
    localStorage.setItem('returning', 'true');
    return response.data;
  } catch (error) {
    console.log('Login failed:', error);
    throw error;
  }
}

export const register = async (name: string, username: string,  email: string, password: string) => {
  try {
    const response = await axios.post(API_URL + '/register', {
      username,
      password,
      email
    });
    localStorage.setItem('returning', 'true');
    return response.data;
  } catch (error) {
    console.log('Registration failed:', error);
    throw error;
  }
}

export const logout = () => {
  document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  window.location.href = '/';
}

export const getUser = async () => {
  try {
    const response = await axios.get(API_URL + `/user`);
    return response.data;
  } catch (error) {
    console.log('Error fetching user data:', error);
    throw error;
  }
};

export const updateInterests = async (interests: number[], theme: string) => {
  try {
    const response = await axios.put(API_URL + `/user`, {
      interests,
      theme
    });
    return response.data;
  } catch (error) {
    console.log('Error updating user preferences:', error);
    throw error;
  }
}

export const buy = async (coins: number) => {
  try {
    console.log(coins);
    const response = await axios.post(API_URL + `/user/buy`, {
      coins
    });
    return response.data;
  } catch (error) {
    console.log('Error buying reward:', error);
    throw error;
  }
}
