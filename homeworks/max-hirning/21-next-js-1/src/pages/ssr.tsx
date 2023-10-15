import HWPage from './hw'
import { tilesAPI } from '@/controllers/api'

export async function getServerSideProps() {
  const res = await tilesAPI.getMany(5);
  return { props: { data: res, title: "SSR Tiles" } }
}

export default HWPage;