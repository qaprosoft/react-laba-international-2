// import './index.css';



import App from '@/components/App/App';
import { getNewAvatar } from '@/utils/getNewAvatar';
import Head from 'next/head';

export const getServerSideProps = async () => {
  const avatars = await getNewAvatar(5);

  return {
    props: {
      avatars,
    }
  }
};

const SsrPage = ({avatars}) => {
return (
  <>
  <Head>
  <title>Avatar App | SSR</title>
  <meta name="description" content="SSR page" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
  <App avatarsFromServer={avatars}/>
  </>
)


};




export default SsrPage;
