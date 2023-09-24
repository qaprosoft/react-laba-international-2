import IAvatarResponse from '@/types/avatarResponse';

export default async function getNewAvatar(
  limit: number,
): Promise<Array<IAvatarResponse>> {
  const URL = `https://tinyfac.es/api/data?limit=${limit}&quality=0`;
  const response = await fetch(URL);
  const avatars = await response.json();

  return avatars.map((avatar: IAvatarResponse) => {
    return {
      id: avatar.id,
      url: avatar.url,
    };
  });
}
