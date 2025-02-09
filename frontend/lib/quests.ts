'use client';

import axios from '@/lib/axios';
import { API_URL } from '@/config';

import { getUser } from './user';

export const getQuests = async () => {
  try {
    const response = await getUser();
    return {data: response.data.current_quests};
  } catch (error) {
    console.log('Error fetching quests:', error);
    throw error;
  }
};