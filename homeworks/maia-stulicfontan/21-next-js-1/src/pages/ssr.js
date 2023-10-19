import App from '@/components/App';
import {fetchAvatars} from '@/services/avatars';

export async function getServerSideProps() {
  const avatars = await fetchAvatars(5);
  return {
    props: {
      avatars,
    },
  };
}

export default function SsrPage({avatars = []}) {
  return <App avatars={avatars} />;
}
