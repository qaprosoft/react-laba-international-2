import HomePage from '@/components/home-page/HomePage';
import {API_URL} from '@/config/env-config';
import {addIdToResponse} from '@/helpers/addIdToResponse';

export async function getServerSideProps() {
  const response = await fetch(`${API_URL}/data?limit=${5}`);
  const avatars = await response.json();

  return {
    props: {
      avatars: addIdToResponse(avatars),
    },
  };
}

const SSR = ({avatars = []}) => {
  return <HomePage initialAvatars={avatars} />;
};

export default SSR;
