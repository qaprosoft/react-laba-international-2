import constants from '@/constants';
import { v4 as uuidv4 } from 'uuid';
import IAvatarResponse from '@/types/avatarResponse';

export default async function getNewAvatars(
  limit: number,
): Promise<IAvatarResponse[]> {
  try {
    const response = await fetch(
      `${constants.avatarURL}limit=${limit}&quality=0`,
    );
    const avatars = (await response.json()) as IAvatarResponse[];

    return avatars.map((avatar: IAvatarResponse) => ({
      id: uuidv4(),
      url: avatar.url,
    }));
  } catch {
    throw new Error('Request failed');
  }
}
