import HomePage from '@/components/HomePage';
import fetchUsers from '@/utils/fetchUsers';

const handler = data => {
  console.log(data);
};

export async function getServerSideProps() {
  const avatars = await fetchUsers(handler, () => {}, 5);
  return {props: {loadedAvatars: avatars}};
}

export default HomePage;
