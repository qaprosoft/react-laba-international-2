'use client';

import 'react-toastify/dist/ReactToastify.css';

import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';

import styles from '@/app/page.module.scss';
import AddAvatar from '@/components/AddAvatar';
import Avatar from '@/components/Avatar';
import getNewAvatars from '@/helpers/getNewAvatars';
import IAvatarResponse from '@/types/avatarResponse';
import RefreshButton from '@/components/RefreshButton';

export default function Home() {
  const [avatars, setAvatars] = useState<IAvatarResponse[]>([]);
  const [isAllRefreshing, setIsAllRefreshing] = useState(false);
  const [refreshingIndex, setRefreshingIndex] = useState<number | null>(null);

  const addNewAvatar = async () => {
    try {
      setAvatars([...avatars, ...(await getNewAvatars(1))]);
    } catch (error) {
      toast.error(`${error}`);
    }
  };

  const refreshAvatar = useCallback(
    async (avatarId: string) => {
      try {
        const refreshingIndex = avatars.findIndex(({ id }) => id == avatarId);

        setRefreshingIndex(refreshingIndex);

        const newAvatars = [...avatars];
        newAvatars[refreshingIndex] = (await getNewAvatars(1))[0];

        setAvatars(newAvatars);
      } catch (error) {
        toast.error(`${error}`);
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
    } catch (error) {
      toast.error(`${error}`);
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

      <RefreshButton updateAllAvatars={updateAllAvatars} />
    </main>
  );
}
