import {Basic} from 'next/font/google';
import {Button, NewTileButton, Tile} from '@/components';

const basic = Basic({
  weight: '400',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <main className={`${basic.className}`}>
      <Button>Refresh All</Button>
      <Tile />
      <NewTileButton />
    </main>
  );
}
