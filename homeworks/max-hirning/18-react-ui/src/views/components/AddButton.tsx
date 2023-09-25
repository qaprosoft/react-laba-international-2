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
  
  const disabledStyle = (): object => {
    if(loading) {
      return {
        opacity: "0.5",
      };
    }
    return {};
  }

  return (
    <button 
      onClick={addTile}
      disabled={loading}
      className={styles.button}
      style={{...disabledStyle()}}
    >
      <img 
        src={AddIcon} 
        alt="Add tile"
        className={styles.icon}
      />
    </button>
  )
}