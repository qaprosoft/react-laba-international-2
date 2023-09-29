import {Basic} from 'next/font/google';
import {Button, NewTileButton, Tile, Loader} from '@/components';
import {ReactElement, useEffect, useState} from 'react';
import {Avatar} from '@/types';

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
        if (!data.length) throw new Error('No data');
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
        if (!data.length) throw new Error('No data');
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
      {loading && <Loader fullScreen={true} rotate={true} />}
    </main>
  );
}
