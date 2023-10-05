import App from '@/components/App';
import fetchAllData from '@/helpers/fetchAllData';
import React from 'react';

export async function getStaticProps() {
  const initialAvatars = await fetchAllData(5);
  const imagesOfAvatars = initialAvatars.map(list => list.url);

  return {
    props: {
      imagesOfAvatars,
    },
  };
}

const SSG = ({imagesOfAvatars}) => {
  return <App imagesOfAvatars={imagesOfAvatars} />;
};

export default SSG;
