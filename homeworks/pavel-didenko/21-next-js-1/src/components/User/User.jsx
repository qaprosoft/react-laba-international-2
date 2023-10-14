import {useState} from "react";
import updateUserIcon from '../../assets/img/icons/update-user.svg'

const loadingStyles = {
  animation: 'spinner 1.5s linear infinite',
  opacity: '1',
  left: '30%',
  top: '30%',
};
const staticStyles = {
  left: '50%',
  top: '50%',
};

import styles from './user.module.css';

const User = ({link, updateUserAvatar, loading, index}) => {
  const [avatarUpdate, setAvatarUpdate] = useState(false);
  async function clickHandler() {
    setAvatarUpdate(true);
    await updateUserAvatar(index);
    setAvatarUpdate(false);
  }

  return (
    <div className={styles.user}>
      <img
        className={styles.user__foto}
        src={link}
        alt="user image"
        onClick={clickHandler}
      />
      <img
        className={styles['user__refresh-foto']}
        src={updateUserIcon.src}
        style={loading || avatarUpdate ? loadingStyles : staticStyles}
        onClick={clickHandler}
      />
    </div>
  );
};


export default User;