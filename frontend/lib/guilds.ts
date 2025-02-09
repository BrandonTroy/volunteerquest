import axios from '@/lib/axios';
import { API_URL } from '@/config';
import { getUser } from './user';

export const joinGuild = async (id: string) => {
  return await axios.post(API_URL + `/join-guild/${id}`);
}

export const getGuild = async () => {
  try {
    const response = await getUser();
    return {data: response.data.guild};
  } catch (error) {
    console.log('Error fetching guild:', error);
    throw error;
  }
}
