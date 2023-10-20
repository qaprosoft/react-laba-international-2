import HomePage from '.';
import { fetchUsers } from "../helpers/fetchUsers";

export async function getStaticProps() {
  const usersAvatars = await fetchUsers(5)
  return {
    props: {
      usersAvatars,
    },
  };
}

export default HomePage;