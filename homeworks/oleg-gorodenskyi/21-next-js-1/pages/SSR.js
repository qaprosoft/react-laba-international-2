import App from '@/components/App';
import fetchAllData from '@/helpers/fetchAllData';
import React from 'react';

export async function getServerSideProps() {
  const initialAvatars = await fetchAllData(5);
  const imagesOfAvatars = initialAvatars.map(list => list.url);

  return {
    props: {
      imagesOfAvatars,
    },
  };
}

const SSR = ({imagesOfAvatars}) => {
  return <App imagesOfAvatars={imagesOfAvatars} />;
};

export default SSR;
