import { useEffect, useState } from "react";
import RefreshIcon from "../../assets/refresh.svg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import styles from "../../styles/components/Tile.module.css";
import { ITilesStore, refreshOneTile } from "../../redux/tiles";

interface IProps {
  id: number;
  alt: string;
  image: string;
}

export function Tile({id, image, alt}: IProps) {
  const dispatch: AppDispatch = useDispatch();
  const [showRefreshBtn, setShowRefreshBtn] = useState<boolean>(false);
  const { isRefreshingOne, isRefreshingAll, loading, error }: ITilesStore = useSelector((state: RootState) => state.tiles);

  useEffect(() => {
    if(isRefreshingAll) {
      setShowRefreshBtn(true);
    }
  }, [isRefreshingAll])

  useEffect(() => {
    if(loading === false && error === false) {
      setShowRefreshBtn(false);
    }
  }, [loading, error])

  const refreshTile = () => {
    setShowRefreshBtn(true);
    dispatch(refreshOneTile(id));
  }

  return (
    <div 
      className={styles.tile}
      onMouseEnter={() => { setShowRefreshBtn(true); }}
      onMouseLeave={() => { (!(isRefreshingOne || isRefreshingAll)) && setShowRefreshBtn(false); }}
    >
      <img
        alt={alt}
        src={image} 
        className={styles.image}
      />
      <button 
        onClick={refreshTile}
        className={styles.button}
        style={{display: (showRefreshBtn) ? "block" : "none"}}
      >
        <img
          src={RefreshIcon}
          alt="refresh tile"
          className={`${styles.icon} ${loading ? styles.rotate : ""}`} // Apply the rotation class conditionally
        />
      </button>
    </div>
  ) 
}