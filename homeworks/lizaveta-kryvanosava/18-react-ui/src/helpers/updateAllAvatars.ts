import IAvatarResponse from '@/types/avatarResponse';

import getNewAvatars from './getNewAvatars';

const updateAllAvatars = async (
  avatars: Array<IAvatarResponse>,
  setAvatars: (newAvatars: Array<IAvatarResponse>) => void,
  setIsRefreshing: (isRefreshing: boolean) => void,
) => {
  if (!avatars.length) return;

  setIsRefreshing(true);

  try {
    const newAvatars = await getNewAvatars(avatars.length);
    setAvatars(newAvatars);
  } catch (error) {
    console.log(error);
  } finally {
    setIsRefreshing(false);
  }
};

export default updateAllAvatars;
