const BASE_URL: string = ' https://tinyfac.es/api';

export type AvatarData = {
  id: number;
  first_name: string;
  last_name: string;
  url: string;
};

export const getAvatars = async (count: number): Promise<AvatarData[]> => {
  try {
    const avatarResponse = await fetch(
      `${BASE_URL}/data?limit=${count}&quality=0`,
    );
    const avatarData = await avatarResponse.json();

    return avatarData;
  } catch (error) {
    throw new Error('Request failed');
  }
};
