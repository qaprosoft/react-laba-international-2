import App from "@/components/App/App";
import { getNewAvatar } from "@/utils/getNewAvatar";
import Head from "next/head";


export const getStaticProps = async () => {
    const avatars = await getNewAvatar(5);

    return {
      props: {
        avatars,
      }
    }
};

const SsgPage = ({avatars}) => {
    return (
        <>
        <Head>
        <title>Avatar App | SSG</title>
        <meta name="description" content="SSG page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <App avatarsFromServer={avatars}/>
        </>
   )
};

export default SsgPage;