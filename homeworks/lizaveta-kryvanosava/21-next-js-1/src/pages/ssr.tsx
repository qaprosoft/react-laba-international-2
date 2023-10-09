import AvatarsGrid from '@/components/AvatarsGrid/AvatarsGrid';
import constants from '@/constants';
import getNewAvatars from '@/helpers/getNewAvatars';

export async function getServerSideProps() {
  const initialAvatars = await getNewAvatars(constants.initialNumberOfAvatars);

  return {
    props: {
      initialAvatars,
    },
  };
}

export default function StaticSiteGenerationPage({ initialAvatars = [] }) {
  return <AvatarsGrid initialAvatars={initialAvatars} />;
}
