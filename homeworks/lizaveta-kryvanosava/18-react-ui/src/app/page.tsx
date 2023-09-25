'use client';

import { useCallback, useState } from 'react';

import styles from '@/app/page.module.scss';
import AddAvatar from '@/components/AddAvatar';
import Avatar from '@/components/Avatar';
import getNewAvatars from '@/helpers/getNewAvatars';
import IAvatarResponse from '@/types/avatarResponse';

export default function Home() {
  const [avatars, setAvatars] = useState<IAvatarResponse[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [refreshingIndex, setRefreshingIndex] = useState<number | null>(null);

  const addNewAvatar = async () => {
    try {
      setAvatars([...avatars, ...(await getNewAvatars(1))]);
    } catch {}
  };

  const refreshAvatar = useCallback(
    async (avatarId: number) => {
      try {
        const index = avatars.findIndex(({ id }) => id == avatarId);

        setRefreshingIndex(index);

        const newAvatars = [...avatars];
        newAvatars[index] = (await getNewAvatars(1))[0];

        setAvatars(newAvatars);
      } catch {
      } finally {
        setRefreshingIndex(null);
      }
    },
    [avatars],
  );

  const updateAllAvatars = async () => {
    if (!avatars.length) return;

    setIsRefreshing(true);

    try {
      const newAvatars = await getNewAvatars(avatars.length);
      setAvatars(newAvatars);
    } catch {
    } finally {
      setIsRefreshing(false);
    }
  };

  return (
    <main className={styles.main}>
      <section className={styles.main__avatars}>
        {avatars.map((avatar, index) => (
          <Avatar
            avatar={avatar}
            isLoading={isRefreshing || refreshingIndex === index}
            clickHandler={refreshAvatar}
            key={avatar.id}
          />
        ))}
        <AddAvatar addNewAvatar={addNewAvatar} />
      </section>

      <section className={styles.main__refresh}>
        <button
          onClick={updateAllAvatars}
          className={styles['main__refresh-button']}
        >
          Refresh All
        </button>
      </section>
    </main>
  );
}
