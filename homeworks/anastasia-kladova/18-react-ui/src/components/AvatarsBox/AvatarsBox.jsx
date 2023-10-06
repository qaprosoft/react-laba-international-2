import AddBtn from '../Buttons/AddBtn/AddBtn';
import styles from './AvatarsBox.module.css';
import {getNewAvatar} from '../../utils/getNewAvatar';
import AvatarsList from '../AvatarsList/AvatarsList';

const AvatarsBox = ({avatars, setAvatars}) => {
  const addNewAvatar = async () => {
    const data = await getNewAvatar(1);
    setAvatars([...avatars, ...data]);
  };

  return (
    <div className={styles.avatars__box}>
      <AvatarsList avatars={avatars} setAvatars={setAvatars} />
      <AddBtn handler={addNewAvatar} />
    </div>
  );
};

export default AvatarsBox;
