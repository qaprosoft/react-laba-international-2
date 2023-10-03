import {getAvatars} from '@/api';
import HomePage from '@/components/home-page/HomePage';

export async function getServerSideProps() {
  const avatars = await getAvatars(5);

  return {
    props: {
      avatars,
    },
  };
}

const SSR = ({avatars = []}) => {
  return <HomePage initialAvatars={avatars} />;
};

export default SSR;
