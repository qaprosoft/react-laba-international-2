import styles from './Avatar.module.css';
import {type AvatarResponse} from '@/types';
import Image from 'next/image';

type AvatarProps = {
  avatar: AvatarResponse;
  refreshAvatar: (id: number) => void;
};

const Avatar = ({avatar, refreshAvatar}: AvatarProps) => {
  return (
    <div className={styles.avatar}>
      <Image
        width={240}
        height={240}
        src={avatar.url}
        alt={avatar.first_name}
      />
      <div className={styles.avatarOverlay}></div>
      <Image
        className={styles.refresh}
        width={120}
        height={120}
        src="/refresh.svg"
        alt="refresh"
        onClick={() => refreshAvatar(avatar.id)}
      />
    </div>
  );
};
export default Avatar;
