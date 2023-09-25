import { refreshAll } from "../../redux/tiles";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux/es/exports";
import styles from "../../styles/components/RefreshAllButton.module.css";

export function RefreshAllButton() {
  const dispatch: AppDispatch = useDispatch();

  const refreshAllTiles = () => {
    dispatch(refreshAll());
  }

  return (
    <button 
      onClick={refreshAllTiles}
      className={styles.button}
    >Refresh All</button>
  )
}