import HomePage from '@/components/home-page/HomePage';
import {API_URL} from '@/config/env-config';
import {addIdToResponse} from '@/helpers/addIdToResponse';

export async function getStaticProps() {
  const response = await fetch(`${API_URL}/data?limit=${5}`);
  const avatars = await response.json();

  return {
    props: {
      avatars: addIdToResponse(avatars),
    },
  };
}

const SSG = ({avatars = []}) => {
  return <HomePage initialAvatars={avatars} />;
};

export default SSG;
