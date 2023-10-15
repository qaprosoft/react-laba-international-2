import AvatarItem from '../AvatarItem/AvatarItem';
import styles from './AvatarsList.module.css';

const AvatarsList = ({avatars, setAvatars, isLoading, setIsLoading}) => {
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
    </ul>
  );
};

export default AvatarsList;
