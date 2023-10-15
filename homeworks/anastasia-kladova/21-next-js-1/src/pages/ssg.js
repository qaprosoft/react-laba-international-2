import App from "@/components/App/App";
import { getNewAvatar } from "@/utils/getNewAvatar";


export const getStaticProps = async () => {
    const avatars = await getNewAvatar(5);
console.log(avatars)
    return {
      props: {
        avatars,
      }
    }
};

const SsgPage = ({avatars}) => {
    return (<App avatarsFromServer={avatars}/>)
};

export default SsgPage;