import {Main} from '@/views';
import {getAvatars} from '@/services/avatars';
import {Avatar} from '@/types';

export async function getStaticProps() {
  const avatars = await getAvatars(5);

  return {
    props: {
      avatars,
    },
  };
}

interface SSGProps {
  avatars: Avatar[];
}

export default function SSG({avatars}: SSGProps) {
  return <Main avatars={avatars} />;
}
