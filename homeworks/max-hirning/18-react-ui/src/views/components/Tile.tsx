import { useState } from "react";
import { useDispatch } from "react-redux";
import { refreshOne } from "../../redux/tilse";
import { AppDispatch } from "../../redux/store";
import RefreshIcon from "../../assets/refresh.svg";
import styles from "../../styles/components/Tile.module.css";

interface IProps {
  id: number;
  alt: string;
  image: string;
}

export function Tile({id, image, alt}: IProps) {
  const dispatch: AppDispatch = useDispatch();
  const [isRotating, setIsRotating] = useState<boolean>(false);
  const [showRefreshBtn, setShowRefreshBtn] = useState<boolean>(false);


  const refreshTile = () => {
    setShowRefreshBtn(true);
    setIsRotating(true);
    setTimeout(() => {
      setIsRotating(false);
      setShowRefreshBtn(false);
      dispatch(refreshOne(id));
    }, 1500);

  }

  return (
    <div 
      className={styles.tile}
      onMouseEnter={() => { setShowRefreshBtn(true); }}
      onMouseLeave={() => { (!isRotating) && setShowRefreshBtn(false); }}
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
          className={`${styles.icon} ${isRotating ? styles.rotate : ""}`} // Apply the rotation class conditionally
        />
      </button>
    </div>
  ) 
}