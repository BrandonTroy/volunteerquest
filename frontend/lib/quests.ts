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

export const getStories = async () => {
  try {
    const response = await getUser();
    return {data: response.data.stories};
  } catch (error) {
    console.log('Error fetching quests:', error);
    throw error;
  }
};

export const completeQuest = async (id: string) => {  
  try {
    const response = axios.post(API_URL + `/user/complete-quest`, { quest_id: id });
    return response;
  } catch (error) {
    console.log('Error fetching quests:', error);
    throw error;
  }
};
