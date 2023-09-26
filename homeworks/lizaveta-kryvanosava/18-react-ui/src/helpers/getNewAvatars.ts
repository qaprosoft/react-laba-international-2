import constants from '@/constants';
import IAvatarResponse from '@/types/avatarResponse';

export default async function getNewAvatars(
  limit: number,
): Promise<IAvatarResponse[]> {
  try {
    const response = await fetch(`${constants.avatarURL}limit=${limit}`);
    const avatars = (await response.json()) as IAvatarResponse[];

    return avatars.map((avatar: IAvatarResponse) => ({
      id: avatar.id,
      url: avatar.url,
    }));
  } catch {
    throw new Error('Request failed');
  }
}
