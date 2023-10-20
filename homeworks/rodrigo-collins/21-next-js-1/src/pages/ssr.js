import HomePage from '.';
import { fetchUsers } from '../helpers/fetchUsers';


export async function getServerSideProps() {
  const usersAvatars = await fetchUsers(5)

  return {
    props: {
      usersAvatars,
    },
  };
}


export default HomePage;
