import refreshButton from '@public/refresh.svg';
import Image from 'next/image';
import { useState } from 'react';

import styles from '@/components/avatar.module.scss';
import Loader from '@/components/Loader';
import getNewAvatars from '@/helpers/getNewAvatars';
import IAvatarResponse from '@/types/avatarResponse';

export default function Avatar({
  avatar,
  isRefreshingAll,
}: {
  avatar: IAvatarResponse;
  isRefreshingAll: boolean;
}) {
  const [url, setUrl] = useState(avatar.url);
  const [isLoading, setIsLoading] = useState(false);

  const refreshAvatar = async () => {
    try {
      setIsLoading(true);
      const newAvatar = await getNewAvatars(1);
      setUrl(newAvatar[0].url);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return isLoading || isRefreshingAll ? (
    <Loader />
  ) : (
    <div className={styles.tile}>
      <Image
        className={styles.tile__image}
        width={240}
        height={240}
        unoptimized
        src={url}
        alt="Avatar"
      />

      <div className={styles.tile__hidden} onClick={refreshAvatar}>
        <Image
          className={styles.tile__refresh}
          width={100}
          height={100}
          unoptimized
          src={refreshButton as string}
          alt="refresh"
        />
      </div>
    </div>
  );
}
