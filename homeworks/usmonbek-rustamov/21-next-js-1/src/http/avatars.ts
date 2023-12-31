import {AvatarData} from '../common/types';

const BASE_URL: string = ' https://tinyfac.es/api';

export const getAvatars = async (count: number): Promise<AvatarData[]> => {
  const avatarResponse = await fetch(
    `${BASE_URL}/data?limit=${count}&quality=0`,
  );
  const avatarList = await avatarResponse.json();

  if (avatarList.error) throw new Error(avatarList.reason);

  return avatarList;
};
