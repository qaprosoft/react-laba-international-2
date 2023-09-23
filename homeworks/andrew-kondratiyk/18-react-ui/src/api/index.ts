import {AvatarResponse} from '@/types';

export const getAvatar = async (): Promise<AvatarResponse> => {
  const response = await fetch('https://tinyfac.es/api/data?limit=1');
  const data: AvatarResponse[] = await response.json();
  return data[0];
};
