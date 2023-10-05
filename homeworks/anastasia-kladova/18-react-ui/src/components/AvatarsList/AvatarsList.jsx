import AvatarItem from '../AvatarItem/AvatarItem';
import styles from './AvatarsList.module.css';

const AvatarsList = ({avatars, setAvatars}) => {
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
        />
      ))}
    </ul>
  );
};

export default AvatarsList;
