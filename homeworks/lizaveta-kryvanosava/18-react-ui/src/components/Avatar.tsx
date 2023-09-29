import refreshButton from '@public/refresh.svg';
import Image from 'next/image';
import { memo } from 'react';

import styles from '@/components/avatar.module.scss';
import Loader from '@/components/Loader';
import IAvatarResponse from '@/types/avatarResponse';

export default memo(function Avatar({
  avatar,
  isLoading,
  clickHandler,
}: {
  avatar: IAvatarResponse;
  isLoading: boolean;
  clickHandler: (id: string) => void;
}) {
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.tile}>
      <Image
        className={styles.tile__image}
        width={240}
        height={240}
        unoptimized
        src={avatar.url}
        alt="Avatar"
      />

      <div
        className={styles.tile__refresh}
        onClick={() => clickHandler(avatar.id)}
      >
        <Image
          className={styles['tile__refresh-icon']}
          width={100}
          height={100}
          unoptimized
          src={refreshButton as string}
          alt="refresh"
        />
      </div>
    </div>
  );
});
