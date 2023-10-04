import AvatarsList from '@/components/AvatarsList/AvatarsList';
import getNewAvatars from '@/helpers/getNewAvatars';

export async function getStaticProps() {
  const avatarsProp = await getNewAvatars(5);

  return {
    props: {
      avatarsProp,
    },
  };
}

export default function StaticSiteGenerationPage({ avatarsProp = [] }) {
  return <AvatarsList avatarsProp={avatarsProp} />;
}
