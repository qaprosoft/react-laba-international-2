import {Main} from '@/views';
import {getAvatars} from '@/services/avatars';
import {Avatar} from '@/types';

export async function getServerSideProps() {
  const avatars = await getAvatars(5);

  return {
    props: {
      avatars,
    },
  };
}

interface SSRProps {
  avatars: Avatar[];
}

export default function SSR({avatars}: SSRProps) {
  return <Main avatars={avatars} />;
}
