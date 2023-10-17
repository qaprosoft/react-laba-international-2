import {url} from '../constants/urls.js';
import fetchUsers from '@/functions/fetchUsers';
import HomePage from '.';


export async function getServerSideProps() {
  const usersData = await fetchUsers(url, 5, 1);
  const usersAvatars = usersData.map((data) => data.url)
  return {
    props: {
      usersAvatars,
    },
  };
}


export default HomePage;


