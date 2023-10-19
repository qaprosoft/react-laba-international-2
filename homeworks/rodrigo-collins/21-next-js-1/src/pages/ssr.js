import HomePage from '.';
import { useEffect } from 'react';
import { fetchRandomUser } from '../helpers/fetchRandomUser';


export async function getServerSideProps() {
  const initialUsers = [1, 2, 3, 4, 5]
  const usersAvatars = await Promise.all(initialUsers.map(async (user) => await fetchRandomUser()));

  return {
    props: {
      usersAvatars,
    },
  };
}


export default HomePage;
