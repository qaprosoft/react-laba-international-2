import { getNewAvatar } from '@/utils/getNewAvatar';
import AvatarItem from '../AvatarItem/AvatarItem';
import AddBtn from '../Buttons/AddBtn/AddBtn';
import styles from './AvatarsList.module.css';

const AvatarsList = ({avatars, setAvatars, isLoading, setIsLoading}) => {
  const addNewAvatar = async () => {
    setIsLoading(true);
    const data = await getNewAvatar(1);
    setAvatars([...avatars, ...data]);
    setIsLoading(false);
  };

  return (
    <ul className={styles.avatars__list}>
      {avatars.map((avatar, index) => (
        <AvatarItem
          src={avatar.url}
          alt={avatar.last_name}
          id={avatar.id}
          avatars={avatars}
          setAvatars={setAvatars}
          key={index}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      ))}
      <AddBtn handler={addNewAvatar} isLoading={isLoading} />
    </ul>
  );
};

export default AvatarsList;
