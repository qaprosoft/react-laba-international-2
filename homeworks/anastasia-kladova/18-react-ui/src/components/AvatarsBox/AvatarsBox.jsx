import AddBtn from '../Buttons/AddBtn/AddBtn';
import styles from './AvatarsBox.module.css';
import {getNewAvatar} from '../../utils/getNewAvatar';
import AvatarsList from '../AvatarsList/AvatarsList';

const AvatarsBox = ({avatars, setAvatars, isLoading, setIsLoading}) => {
  const addNewAvatar = async () => {
    setIsLoading(true);
    const data = await getNewAvatar(1);
    setAvatars([...avatars, ...data]);
    setIsLoading(false);
  };

  return (
    <div className={styles.avatars__box}>
      <AvatarsList
        avatars={avatars}
        setAvatars={setAvatars}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <AddBtn handler={addNewAvatar} isLoading={isLoading} />
    </div>
  );
};

export default AvatarsBox;
