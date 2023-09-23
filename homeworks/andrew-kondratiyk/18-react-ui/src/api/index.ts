import {AvatarResponse} from '@/types';

export const getAvatar = async (): Promise<AvatarResponse> => {
  const response = await fetch('https://tinyfac.es/api/data?limit=1');
  console.log(response);
  const data: AvatarResponse[] = await response.json();
  return data[0];
};

export const getAvatars = async (
  avatarsCount: number,
): Promise<AvatarResponse[]> => {
  const response = await fetch(
    `https://tinyfac.es/api/data?limit=${avatarsCount}`,
  );
  return await response.json();
};
