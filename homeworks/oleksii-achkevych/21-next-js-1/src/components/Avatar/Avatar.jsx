import React from 'react';
import styles from './Avatar.module.css';

const Avatar = ({ avatarUrl, refreshAvatar }) => {
  return (
    <div className={styles.avatar}>
      <img onClick={refreshAvatar} src={avatarUrl} alt="avatar" />
      <div onClick={refreshAvatar} className={styles.refresh_overlay}>
        <img
          className={styles.refresh_icon}
          src="./refresh.png" 
          alt="refresh"
        />
      </div>
    </div>
  );
};

export default Avatar;