import {StaticImport} from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Refresh from 'public/assets/icons/refresh.svg';
import {useState, useEffect} from 'react';
import styles from './Component.module.css';

export default () => {
  const [avatar, setAvatar] = useState<StaticImport | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [visible, setVisible] = useState<boolean>(true);
  const [toggle, setToggle] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    fetch('https://tinyfac.es/api/data?limit=1&quality=0')
      .then(res => res.json())
      .then(data => {
        if (!data.length) return;
        setAvatar(data[0].url);
      })
      .finally(() => {
        setVisible(false);
      });
  }, [toggle]);
  return (
    <button
      onClick={() => {
        setToggle(!toggle);
      }}
      onMouseEnter={() => {
        setVisible(true);
      }}
      onMouseLeave={() => {
        setVisible(false);
      }}
      className={`${
        avatar && styles.boxShadow
      } z-40 transition relative flex justify-center overflow-hidden rounded-[6px] h-[240px] w-[240px] items-center hover:opacity-90 active:scale-95`}
    >
      {avatar && (
        <Image
          src={avatar}
          alt="avatar"
          onLoadingComplete={() => {
            setLoading(false);
          }}
          fill
        />
      )}
      {(loading || visible) && (
        <Refresh
          alt="Refresh"
          height={104}
          width={100}
          fill="#02CC67"
          className={`text-green z-50 ${loading && 'animate-spin'}`}
        />
      )}
    </button>
  );
};
