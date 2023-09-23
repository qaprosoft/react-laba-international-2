import { ReactElement } from "react";
import { Tile } from "../components/Tile";
import { RootState } from "../../redux/store";
import { Loader } from "../components/Loader";
import { AddButton } from "../components/AddButton";
import { useSelector } from "react-redux/es/exports";
import styles from "../../styles/MainPage.module.css";
import { ITile, ITilesStore } from "../../redux/tilse";
import { RefreshAllButton } from "../components/RefreshAllButton";

export function MainPage() {
  const { data, error, loading }: ITilesStore = useSelector((state: RootState) => state.tiles);

  return (
    <>
      <main className={styles.main}>
        <Loader
          error={error}
          loading={loading}
        >
          <>
            {
              data?.map(({url, first_name, last_name}: ITile, index: number): ReactElement => {
                return (
                  <Tile 
                    id={index}
                    key={index}
                    image={url} 
                    alt={`${first_name} ${last_name}`}
                  />
                )
              })
            } 
          </>
        </Loader>
        <AddButton/>
      </main>
      <RefreshAllButton/>
    </>
  ) 
}