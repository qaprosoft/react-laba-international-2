import {getNewAvatar} from '../../utils/getNewAvatar';
import styles from './AvatarItem.module.css';

const AvatarItem = ({
  src,
  id,
  alt,
  avatars,
  setAvatars,
  isLoading,
  setIsLoading,
}) => {
  const refreshOneAvatar = async () => {
    setIsLoading(true);
    const indexToReplace = avatars.findIndex(avatar => avatar.id === id);

    if (indexToReplace !== -1) {
      const newAvatar = await getNewAvatar(1);
      const newAvatars = [...avatars];
      newAvatars[indexToReplace] = newAvatar[0];
      setAvatars(newAvatars);
    }
    setIsLoading(false);
  };

  return (
    <li className={styles.avatars__item} id={id}>
      <img className={styles.avatars__image} src={src} alt={alt} />
      <button
        disabled={isLoading}
        className={styles.avatars__refreshAllBtn}
        onClick={() => refreshOneAvatar()}
      ></button>
    </li>
  );
};

export default AvatarItem;
