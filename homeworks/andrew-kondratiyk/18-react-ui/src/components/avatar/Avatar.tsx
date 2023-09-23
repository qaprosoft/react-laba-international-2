import {MouseEventHandler} from 'react';
import styles from './Avatar.module.css';
import {type AvatarResponse} from '@/types';
import Image from 'next/image';

type AvatarProps = {
  avatar: AvatarResponse;
  refreshAvatar: MouseEventHandler;
  deleteAvatar: MouseEventHandler;
};

const Avatar = ({avatar, refreshAvatar, deleteAvatar}: AvatarProps) => {
  return (
    <div className={styles.avatar}>
      <div className={styles.deleteAvatarBtn} onClick={deleteAvatar}>
        &times;
      </div>
      <Image
        width={240}
        height={240}
        src={avatar.url}
        alt={avatar.first_name}
        className={styles.avatarImg}
      />
      <div className={styles.avatarOverlay}></div>
      <Image
        className={styles.refresh}
        width={120}
        height={120}
        src="/refresh.svg"
        alt="refresh"
        onClick={refreshAvatar}
      />
    </div>
  );
};
export default Avatar;
