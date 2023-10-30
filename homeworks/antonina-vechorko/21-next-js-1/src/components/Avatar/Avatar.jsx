import React from 'react';
import refreshAvatarImg from '../../assets/refresh_avatar.svg';
import Image from 'next/image';
import styles from '../../styles/avatar.module.css';

const Avatar = ({avatar, onRefresh}) => {
  return (
    <div className={styles.avatar__item} onClick={onRefresh}>
      <Image
        className={styles.avatar__img}
        src={avatar.url}
        alt={avatar.first_name + ' ' + avatar.last_name}
        width={240}
        height={240}
      />
      <Image
        className={styles.avatar__refresh}
        src={refreshAvatarImg}
        alt="refresh"
        width={100}
        height={100}
      />
    </div>
  );
};

export default Avatar;
