import { AppDispatch, RootState } from "../../redux/store";
import { ITilesStore, getManyTiles } from "../../redux/tiles";
import { useDispatch, useSelector } from "react-redux/es/exports";
import styles from "../../styles/components/RefreshAllButton.module.css";

export function RefreshAllButton() {
  const dispatch: AppDispatch = useDispatch()
  const { data }: ITilesStore = useSelector((state: RootState) => state.tiles); 

  const refreshAllTiles = () => {
    (data && data.length > 0) && dispatch(getManyTiles(data.length));
  }

  return (
    <button 
      onClick={refreshAllTiles}
      className={styles.button}
      disabled={!(data && data.length > 0)}
      style={(!(data && data.length > 0)) ? { opacity: 0.5 } : {}}
    >Refresh All</button>
  )
}