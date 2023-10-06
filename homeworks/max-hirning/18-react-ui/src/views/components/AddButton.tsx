import AddIcon from "../../assets/add.svg";
import { AppDispatch, RootState } from "../../redux/store";
import { ITilesStore, getOneTile } from "../../redux/tiles";
import { useDispatch, useSelector } from "react-redux/es/exports";
import styles from "../../styles/components/AddButton.module.css";

export function AddButton() {
  const dispatch: AppDispatch = useDispatch();
  const { loading }: ITilesStore = useSelector((state: RootState) => state.tiles);

  const addTile = () => {
    dispatch(getOneTile());
  }

  return (
    <button 
      onClick={addTile}
      disabled={loading}
      className={styles.button}
      style={loading ? { opacity: 0.5 } : {}}
    >
      <img 
        src={AddIcon} 
        alt="Add tile"
        className={styles.icon}
      />
    </button>
  )
}