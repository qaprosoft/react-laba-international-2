import {AvatarResponse, AvatarResponseApi} from '@/types';
import {v4} from 'uuid';

export const getAvatar = async (): Promise<AvatarResponse> => {
  const response = await fetch('https://tinyfac.es/api/data?limit=1');
  console.log(response);
  const data: AvatarResponseApi[] = await response.json();
  return {...data[0], custom_id: v4()};
};

export const getAvatars = async (
  avatarsCount: number,
): Promise<AvatarResponse[]> => {
  const response = await fetch(
    `https://tinyfac.es/api/data?limit=${avatarsCount}`,
  );
  const data: AvatarResponseApi[] = await response.json();
  return data.map(avatar => ({...avatar, custom_id: v4()}));
};
