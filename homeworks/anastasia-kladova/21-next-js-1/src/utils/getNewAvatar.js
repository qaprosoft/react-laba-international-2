import {API_URL} from '../constants/constants';

export const getNewAvatar = async limit => {
  try {
    const response = await fetch(`${API_URL}?limit=${limit}&quality=0`);
    if (!response.ok) {
      throw new Error('Something is wrong. Please, try again!');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Something is wrong. There is an error!', error.message);
  }
};
