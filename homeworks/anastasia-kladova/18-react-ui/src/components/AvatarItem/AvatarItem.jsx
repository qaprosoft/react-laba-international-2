import {useState} from 'react';
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
  const [isAnimated, setIsAnimated] = useState(false);

  const refreshOneAvatar = async () => {
    setIsLoading(true);
    setIsAnimated(true);

    const indexToReplace = avatars.findIndex(avatar => avatar.id === id);

    if (indexToReplace !== -1) {
      const newAvatar = await getNewAvatar(1);
      const newAvatars = [...avatars];
      newAvatars[indexToReplace] = newAvatar[0];
      setAvatars(newAvatars);
    }

    setIsAnimated(false);
    setIsLoading(false);
  };

  return (
    <li className={styles.avatars__item} id={id}>
      <img className={styles.avatars__image} src={src} alt={alt} />
      <button
        className={`${styles.avatars__refreshAllBtn} ${
          isAnimated ? styles.animated : ''
        }`}
        type="button"
        disabled={isLoading}
        onClick={() => refreshOneAvatar()}
      ></button>
    </li>
  );
};

export default AvatarItem;
