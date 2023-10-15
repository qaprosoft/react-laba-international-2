// import './index.css';



import App from '@/components/App/App';
import { getNewAvatar } from '@/utils/getNewAvatar';

export const getServerSideProps = async () => {
  const avatars = await getNewAvatar(5);

  return {
    props: {
      avatars,
    }
  }
};

const SsrPage = ({avatars}) => {
return (<App avatarsFromServer={avatars}/>)


};




export default SsrPage;
