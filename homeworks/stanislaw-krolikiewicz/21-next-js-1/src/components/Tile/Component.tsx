import Image from 'next/image';
import {useState, useEffect} from 'react';
import {Loader, Error as MyError} from '@/components';
import {AnimatePresence} from 'framer-motion';
import {getSingleAvatar} from '@/services/avatars';
import styles from './Component.module.css';

interface Props {
  avatarUrl?: string;
}

export default ({avatarUrl: iAvatar}: Props) => {
  const [avatar, setAvatar] = useState<string | null>(iAvatar || null);
  const [loading, setLoading] = useState<boolean>(true);
  const [visible, setVisible] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAvatar = async () => {
    setLoading(true);
    try {
      const data = await getSingleAvatar();
      setAvatar(data[0].url);
      setError(null);
    } catch (error) {
      if (error instanceof Error) setError(error.message);
      else setError(String(error));
      setLoading(false);
    }
    setVisible(false);
  };

  useEffect(() => {
    if (!avatar) fetchAvatar();
    console.log(avatar);
  }, [avatar]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  }, [error]);
  return (
    <button
      onClick={() => {
        fetchAvatar();
      }}
      onMouseEnter={() => {
        setVisible(true);
      }}
      onMouseLeave={() => {
        setVisible(false);
      }}
      className={`tile
      ${
        avatar && styles.boxShadow
      } z-40 transition relative flex justify-center overflow-hidden rounded-[6px] h-[240px] w-[240px] items-center hover:opacity-90 active:scale-95`}
    >
      {avatar && (
        <Image
          src={avatar}
          alt="avatar"
          fill
          onLoadingComplete={() => {
            setLoading(false);
          }}
        />
      )}
      <AnimatePresence>{error && <MyError message={error} />}</AnimatePresence>
      {(loading || visible) && <Loader rotate={loading} />}
    </button>
  );
};
