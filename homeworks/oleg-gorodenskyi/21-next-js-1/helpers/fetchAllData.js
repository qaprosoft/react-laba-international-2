import {API_URL} from '@/config.js';


export default async function fetchAllData(limit = 1) {
    try {
      const response = await fetch(`${API_URL}/data?limit=${limit}&quality=0`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;

    } catch (error) {
      console.error('An error has occurred', error);
    }
  }