import IAvatarResponse from '@/types/avatarResponse';

export default async function getNewAvatars(
  limit: number,
): Promise<IAvatarResponse[]> {
  const URL = `https://tinyfac.es/api/data?limit=${limit}&quality=0`;

  try {
    const response = await fetch(URL);
    const avatars = (await response.json()) as IAvatarResponse[];

    return avatars.map((avatar: IAvatarResponse) => ({
      id: avatar.id,
      url: avatar.url,
    }));
  } catch {
    throw new Error('Request failed');
  }
}
