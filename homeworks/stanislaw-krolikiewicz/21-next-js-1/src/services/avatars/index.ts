import { api } from '../http';
import { API_URL_SINGLE_AVATAR, API_URL_MULTIPLE_AVATARS } from '@/constants';


const getSingleAvatar = () =>
  api({
    url: API_URL_SINGLE_AVATAR,
    method: 'GET',
  });

const getAvatars = (n: number) =>
  api({
    url: API_URL_MULTIPLE_AVATARS(n),
    method: 'GET',
  });

export { getSingleAvatar, getAvatars };