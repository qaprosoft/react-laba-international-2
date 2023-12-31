import {API_URL} from '@/config/env-config';
import {AvatarResponse, AvatarResponseApi} from '@/types';
import {v4} from 'uuid';

export const getAvatars = async (
  avatarsCount: number = 1,
): Promise<AvatarResponse[]> => {
  const response = await fetch(`${API_URL}/data?limit=${avatarsCount}`);
  const data: AvatarResponseApi[] = await response.json();
  return data.map(avatar => ({...avatar, custom_id: v4()}));
};
