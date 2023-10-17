import HWPage from './hw'
import { tilesAPI } from '@/controllers/api'

export async function getStaticProps() {
  const res = await tilesAPI.getMany(5);
  return { props: { data: res, title: "SSG Tiles" } }
}

export default HWPage;