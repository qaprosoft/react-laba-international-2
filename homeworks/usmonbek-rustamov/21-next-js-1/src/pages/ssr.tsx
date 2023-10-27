import {getAvatars} from '@/http/avatars';

export async function getServerSideProps() {
  const avatars = await getAvatars(5);
  return {
    props: {preloadedAvatars: avatars},
  };
}

export {default} from '@/components/Avatar/AvatarList';
