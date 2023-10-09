import {ImageStateType, ImageType} from '@/types/mainPageTypes';
import {getTinyfaces} from '@/HTTP/tinyfaces';
import {HomeComponent} from '@/components/Home/HomeComponent';
import Head from 'next/head';

export async function getStaticProps() {
  const newImages = await getTinyfaces(5);
  let images = [];
  let error = null;
  if (newImages.error) {
    error = newImages.reason;
  } else {
    images = newImages.map((image: ImageType) => {
      return {
        id: image.id,
        url: image.url,
        fullname: `${image.firstName} ${image.lastName}`,
      };
    });
  }

  return {
    props: {
      imagesProps: images,
      error,
    },
  };
}

export default function HomeSSG({
  imagesProps = [],
  error = null,
}: {
  imagesProps: Array<ImageStateType>;
  error: null | string;
}) {
  return (
    <>
      <Head>
        <title>SSG - Next.js</title>
      </Head>
      <HomeComponent imagesProps={imagesProps} reqError={error} />
    </>
  );
}
