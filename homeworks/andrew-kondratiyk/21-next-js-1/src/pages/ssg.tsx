import {getAvatars} from '@/api';
import HomePage from '@/components/home-page/HomePage';

export async function getStaticProps() {
  const avatars = await getAvatars(5);

  return {
    props: {
      avatars,
    },
  };
}

const SSG = ({avatars = []}) => {
  return <HomePage initialAvatars={avatars} />;
};

export default SSG;
