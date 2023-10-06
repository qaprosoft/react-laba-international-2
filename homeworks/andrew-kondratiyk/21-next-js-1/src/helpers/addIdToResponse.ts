import {v4} from 'uuid';

export const addIdToResponse = (data: any[]) => {
  return data.map(item => ({...item, custom_id: v4()}));
};
