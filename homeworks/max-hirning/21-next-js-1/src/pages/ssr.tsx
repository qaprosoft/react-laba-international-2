import HomePage from '.'
import { tilesAPI } from '@/controllers/api'

export default HomePage;

export async function getServerSideProps() {
  const res = await tilesAPI.getMany(5);
  return { props: { data: res } }
}