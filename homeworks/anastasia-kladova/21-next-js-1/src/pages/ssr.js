// import './index.css';



import App from '@/components/App/App';
import { getNewAvatar } from '@/utils/getNewAvatar';


const SsrPage = ({avatars}) => {
return (<App avatarsFromServer={avatars}/>)


};


export const getServerSideProps = async () => {
  const avatars = await getNewAvatar(5);

  return {
    props: {
      avatars,
    }
  }
};

export default SsrPage;
