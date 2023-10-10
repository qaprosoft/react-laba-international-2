import {API_URL} from '@/config/env-config';
import {addIdToResponse} from '@/helpers/addIdToResponse';
import useFetch from '@/hooks/useFetch';
import {Dispatch, SetStateAction} from 'react';
import styles from './Avatar.module.css';
import {ApiError, type AvatarResponse} from '@/types';
import Image from 'next/image';

type AvatarProps = {
  avatar: AvatarResponse;
  setAvatars: Dispatch<SetStateAction<AvatarResponse[]>>;
};

const Avatar = ({avatar, setAvatars}: AvatarProps) => {
  const {query: refreshAvatar, isLoading} = useFetch(
    `${API_URL}/data?limit=${1}`,
    {
      onSuccess: (result: any) => {
        const newAvatar = addIdToResponse(result)[0];
        setAvatars(prevState =>
          prevState.map(avatarState =>
            avatarState.custom_id === avatar.custom_id
              ? newAvatar
              : avatarState,
          ),
        );
      },
      onError: (error: ApiError) => {
        alert(error.reason);
      },
    },
  );

  const deleteAvatar = (custom_id: string) => {
    setAvatars(prevState =>
      prevState.filter(avatar => avatar.custom_id !== custom_id),
    );
  };

  const imageClassName = `${styles.refresh} ${isLoading && styles.active}`;

  return (
    <div className={styles.avatar}>
      <div
        className={styles.deleteAvatarBtn}
        onClick={() => deleteAvatar(avatar.custom_id)}
      >
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
        onClick={refreshAvatar}
      />
    </div>
  );
};
export default Avatar;
