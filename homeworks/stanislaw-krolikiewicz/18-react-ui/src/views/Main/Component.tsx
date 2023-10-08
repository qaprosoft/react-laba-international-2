import {Tile, Loader, Error as MyError} from '@/components';
import {TilesGrid} from './_components';
import {ReactElement, useEffect, useState} from 'react';
import {Avatar} from '@/types';
import {AnimatePresence} from 'framer-motion';
import {API_URL_SINGLE_AVATAR, API_URL_MULTIPLE_AVATARS} from '@/constants';

export default function Main() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [tiles, setTiles] = useState<ReactElement[]>([]);

  const addNewTile = async () => {
    setLoading(true);
    await fetch(API_URL_SINGLE_AVATAR)
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

  const fetchAvatars = async () => {
    setLoading(true);
    await fetch(API_URL_MULTIPLE_AVATARS(tiles.length))
      .then(res => res.json())
      .then(data => {
        if (!data.length) throw new Error('Failed to fetch avatars!');
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
    <main className="p-[40px] w-full flex flex-col items-center">
      <TilesGrid
        tiles={tiles}
        addNewTile={addNewTile}
        fetchAvatars={fetchAvatars}
      />
      <AnimatePresence>
        {error && <MyError key="modal" message={error} fullScreen={true} />}
      </AnimatePresence>
      {loading && <Loader fullScreen={true} rotate={true} />}
    </main>
  );
}
