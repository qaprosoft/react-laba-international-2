import Image from 'next/image';
import Refresh from 'public/assets/icons/refresh.svg';
import {useState, useEffect} from 'react';
import {Loader} from '@/components';
import styles from './Component.module.css';

interface Props {
  avatarUrl?: string;
}

export default ({avatarUrl: iAvatar}: Props) => {
  const [avatar, setAvatar] = useState<string | null>(iAvatar || null);
  const [loading, setLoading] = useState<boolean>(true);
  const [visible, setVisible] = useState<boolean>(false);
  ``;
  const [toggle, setToggle] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAvatar = () => {
    setLoading(true);
    fetch('https://tinyfac.es/api/data?limit=1&quality=0')
      .then(res => res.json())
      .then(data => {
        if (!data.length) throw new Error('No data');
        setAvatar(data[0].url);
        setError(null);
      })
      .catch(error => {
        setAvatar(null);
        setError(error.message);
        setLoading(false);
      })
      .finally(() => {
        setVisible(false);
      });
  };

  useEffect(() => {
    if (!avatar) fetchAvatar();
    console.log(avatar);
  }, []);
  return (
    <button
      onClick={() => {
        setToggle(!toggle);
        fetchAvatar();
        console.log('click');
      }}
      onMouseEnter={() => {
        setVisible(true);
      }}
      onMouseLeave={() => {
        setVisible(false);
      }}
      className={`tile ${error && styles.error}
      ${
        (avatar || error) && styles.boxShadow
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
      {error && <h2>Error: {error}!</h2>}
      {(loading || visible) && <Loader rotate={loading} />}
    </button>
  );
};
