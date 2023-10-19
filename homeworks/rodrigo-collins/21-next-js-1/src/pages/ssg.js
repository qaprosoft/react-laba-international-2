import { fetchRandomUser } from "../helpers/fetchRandomUser";
import HomePage from '.';

export async function getStaticProps() {
  const initialUsers = [1, 2, 3, 4, 5]
  const usersAvatars = await Promise.all(initialUsers.map(async (user) => await fetchRandomUser()));
  return {
    props: {
      usersAvatars,
    },
  };
}

export default HomePage;