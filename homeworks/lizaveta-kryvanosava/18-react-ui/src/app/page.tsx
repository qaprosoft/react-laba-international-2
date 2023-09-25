'use client';

import { useCallback, useState } from 'react';

import styles from '@/app/page.module.scss';
import AddAvatar from '@/components/AddAvatar';
import Avatar from '@/components/Avatar';
import getNewAvatars from '@/helpers/getNewAvatars';
import IAvatarResponse from '@/types/avatarResponse';

export default function Home() {
  const [avatars, setAvatars] = useState<IAvatarResponse[]>([]);
  const [isAllRefreshing, setIsAllRefreshing] = useState(false);
  const [refreshingIndex, setRefreshingIndex] = useState<number | null>(null);

  const addNewAvatar = async () => {
    try {
      setAvatars([...avatars, ...(await getNewAvatars(1))]);
    } catch {}
  };

  const refreshAvatar = useCallback(
    async (avatarId: number) => {
      try {
        const refreshingIndex = avatars.findIndex(({ id }) => id == avatarId);

        setRefreshingIndex(refreshingIndex);

        const newAvatars = [...avatars];
        newAvatars[refreshingIndex] = (await getNewAvatars(1))[0];

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

    setIsAllRefreshing(true);

    try {
      const newAvatars = await getNewAvatars(avatars.length);
      setAvatars(newAvatars);
    } catch {
    } finally {
      setIsAllRefreshing(false);
    }
  };

  return (
    <main className={styles.main}>
      <section className={styles.main__avatars}>
        {avatars.map((avatar, index) => (
          <Avatar
            avatar={avatar}
            isLoading={isAllRefreshing || refreshingIndex === index}
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
