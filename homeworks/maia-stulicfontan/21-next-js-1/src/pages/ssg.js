import {fetchAvatars} from '@/services/avatars';
import App from '@/components/App';

export async function getStaticProps() {
  const avatars = await fetchAvatars(5);
  return {
    props: {
      avatars,
    },
  };
}

export default function SsgPage({avatars = []}) {
  return <App avatars={avatars} />;
}
