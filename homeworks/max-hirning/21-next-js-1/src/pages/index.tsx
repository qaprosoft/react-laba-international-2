import Head from 'next/head'
import { useState } from "react"
import { ITile } from "@/types/tile"
import { ReactElement } from "react"
import { Tile } from '@/components/Tile'
import { Inter } from 'next/font/google'
import { Loader } from '@/components/Loader'
import { tilesAPI } from '@/controllers/api'
import styles from '@/styles/Home.module.css'
import { AddButton } from '@/components/AddButton'
import { RefreshAllButton } from '@/components/RefreshAllButton'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ data }: { data: ITile[] }) {
  const [tiles, setTiles] = useState<ITile[]>(data ?? []);
  const [isRefreshingAll, setIsRefreshingAll] = useState<boolean>(false);
  const [isRefreshingOne, setIsRefreshingOne] = useState<boolean>(false);

  const addTile = async () => {
    setIsRefreshingOne(true)
    try {
      const res = await tilesAPI.getOne();
      (res) && setTiles((state: ITile[]) => [...state, res]);
    } catch (error) {
      console.error(error);
    }
    setIsRefreshingOne(false)
  }

  const getNewTile = async (id: number) => {
    setIsRefreshingOne(true)
    try {
      const res = await tilesAPI.getOne();
      (res) && setTiles((state: ITile[]) => {
        const stateClone = [...state];
        stateClone.splice(id, 1, res);
        return stateClone
      });
    } catch (error) {
      console.error(error);
    }
    setIsRefreshingOne(false)
  }

  const refreshAllTiles = async () => {
    setIsRefreshingAll(true)
    try {
      const res = await tilesAPI.getMany(tiles.length);
      (res) && setTiles(res);
    } catch (error) {
      console.error(error);
    }
    setIsRefreshingAll(false)
  }

  return (
    <>
      <Head>
        <title>Tiles</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Tiles" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Loader
          error={false}
          loading={isRefreshingAll || isRefreshingOne}
        >
          <section className={styles.tilesList}>
            {
              tiles.map(({url, first_name, last_name}: ITile, index: number): ReactElement => {
                return (
                  <Tile 
                    key={index}
                    image={url} 
                    isRefreshingAll={isRefreshingAll}
                    alt={`${first_name} ${last_name}`}
                    getNewTile={() => getNewTile(index)}
                    loading={isRefreshingAll || isRefreshingOne}
                  />
                )
              })
            } 
            <AddButton 
              onClick={addTile} 
              loading={isRefreshingAll || isRefreshingOne}
            />
          </section>
        </Loader>
        <RefreshAllButton 
          onClick={refreshAllTiles}
          disabled={(!(data && data.length > 0))}
        />
      </main>
    </>
  )
}
