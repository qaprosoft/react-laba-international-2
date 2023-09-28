import {StaticImport} from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import refresh from 'public/assets/icons/refresh.svg';
import {useState, useEffect} from 'react';

export default () => {
  const [avatar, setAvatar] = useState<StaticImport | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    const data = fetch('https://tinyfac.es/api/data?limit=1&quality=0')
      .then(res => res.json())
      .then(data => {
        setAvatar(data[0].url);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <button className="transition hover:opacity-90 active:scale-95">
      {avatar && (
        <Image src={avatar} alt="Refresh all" height={240} width={240} />
      )}
      {loading && (
        <Image src={refresh} alt="Refresh all" height={240} width={240} />
      )}
    </button>
  );
};
