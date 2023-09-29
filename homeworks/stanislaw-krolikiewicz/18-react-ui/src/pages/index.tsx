import {Basic} from 'next/font/google';
import {
  Button,
  NewTileButton,
  Tile,
  Loader,
  Error as MyError,
} from '@/components';
import {ReactElement, use, useEffect, useState} from 'react';
import {Avatar} from '@/types';
import {AnimatePresence} from 'framer-motion';
const basic = Basic({
  weight: '400',
  subsets: ['latin'],
});

export default function Home() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [tiles, setTiles] = useState<ReactElement[]>([]);

  const addNewTile = () => {
    setLoading(true);
    fetch('https://tinyfac.es/api/data?limit=1&quality=0')
      .then(res => res.json())
      .then(data => {
        if (!data.length) throw new Error('Failed to fetch avatar');
        setTiles([...tiles, <Tile key={data[0].id} avatarUrl={data[0].url} />]);
        setError(null);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  };

  const fetchAvatars = () => {
    setLoading(true);
    fetch(`https://tinyfac.es/api/data?limit=${tiles.length}&quality=0`)
      .then(res => res.json())
      .then(data => {
        if (!data.length) throw new Error('Failed to fetch avatars!');
        console.log(data);
        setTiles(
          data.map((avatar: Avatar) => (
            <Tile key={avatar.id} avatarUrl={avatar.url} />
          )),
        );
        setError(null);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (tiles.length) fetchAvatars();
  }, []);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  }, [error]);
  return (
    <main
      className={`${basic.className} p-[40px] w-full flex flex-col items-center`}
    >
      <div className="flex gap-[40px] w-full flex-wrap justify-center">
        {tiles.map((tile: ReactElement) => tile)}
        <NewTileButton onClick={addNewTile} />
      </div>
      <Button onClick={fetchAvatars} className="fixed bottom-[24px] z-50">
        Refresh All
      </Button>
      <AnimatePresence>
        {error && <MyError key="modal" message={error} fullScreen={true} />}
      </AnimatePresence>
      {loading && <Loader fullScreen={true} rotate={true} />}
    </main>
  );
}
