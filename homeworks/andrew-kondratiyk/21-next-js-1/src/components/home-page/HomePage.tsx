import Avatar from '@/components/avatar/Avatar';
import {API_URL} from '@/config/env-config';
import {addIdToResponse} from '@/helpers/addIdToResponse';
import useFetch from '@/hooks/useFetch';
import {ApiError, AvatarResponse} from '@/types';
import {useState} from 'react';

import styles from './Home.module.css';

export type HomePageProps = {
  initialAvatars: AvatarResponse[];
};

const HomePage = ({initialAvatars}: HomePageProps) => {
  const [avatars, setAvatars] = useState<AvatarResponse[]>(initialAvatars);

  const {query: addAvatar, isLoading} = useFetch(`${API_URL}/data?limit=${1}`, {
    onSuccess: (result: any) => {
      const newAvatar = addIdToResponse(result)[0];
      setAvatars([...avatars, newAvatar]);
    },
    onError: (error: ApiError) => {
      alert(error.reason);
    },
  });

  const {query: refreshAllAvatars, isLoading: isAllLoading} = useFetch(
    `${API_URL}/data?limit=${avatars.length}`,
    {
      onSuccess: (result: any) => {
        const newAvatars = addIdToResponse(result);
        setAvatars(newAvatars);
      },
      onError: (error: ApiError) => {
        alert(error.reason);
      },
    },
  );

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {avatars.map(avatar => (
          <Avatar
            key={avatar.custom_id}
            avatar={avatar}
            setAvatars={setAvatars}
          />
        ))}
        <button
          className={styles.addAvatarBtn}
          onClick={addAvatar}
          disabled={isLoading || isAllLoading}
        ></button>
      </div>
      <button
        className={styles.refreshAll}
        onClick={() => avatars.length && refreshAllAvatars()}
        disabled={isLoading || isAllLoading}
      >
        Refresh all
      </button>
    </main>
  );
};

export default HomePage;
