import {MouseEventHandler, useState} from 'react';
import styles from './Avatar.module.css';
import {type AvatarResponse} from '@/types';
import Image from 'next/image';

type AvatarProps = {
  avatar: AvatarResponse;
  refreshAvatar: MouseEventHandler;
  deleteAvatar: MouseEventHandler;
};

const Avatar = ({avatar, refreshAvatar, deleteAvatar}: AvatarProps) => {
  const [loading, setLoading] = useState(false);
  const imageClassName = `${styles.refresh} ${loading && styles.active}`;
  const handleRefresh = (e: React.MouseEvent<HTMLImageElement>) => {
    refreshAvatar(e);
    setLoading(true);
  };

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
        className={imageClassName}
        width={120}
        height={120}
        src="/refresh.svg"
        alt="refresh"
        onClick={handleRefresh}
      />
    </div>
  );
};
export default Avatar;
