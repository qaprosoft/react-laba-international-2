import Image from 'next/image'
import { useEffect, useState } from "react";
import RefreshIcon from "../assets/refresh.svg";
import styles from "../styles/components/Tile.module.css";

interface IProps {
  alt: string;
  image: string;
  loading: boolean;
  getNewTile: () => void;
  isRefreshingAll: boolean;
}

export function Tile({loading, image, alt, getNewTile, isRefreshingAll}: IProps) {
  const [showRefreshBtn, setShowRefreshBtn] = useState<boolean>(false);

  useEffect(() => {
    setShowRefreshBtn(isRefreshingAll);
  }, [isRefreshingAll])

  useEffect(() => {
    if(!loading) {
      setShowRefreshBtn(false);
    }
  }, [loading])

  const refreshTile = () => {
    setShowRefreshBtn(true);
    getNewTile();
  }

  return (
    <div 
      className={styles.tile}
      onMouseEnter={() => { setShowRefreshBtn(true); }}
      onMouseLeave={() => { (!loading) && setShowRefreshBtn(false); }}
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
        <Image
          width={70}
          height={70}
          src={RefreshIcon}
          alt="refresh tile"
          className={`${styles.icon} ${loading ? styles.rotate : ""}`} // Apply the rotation class conditionally
        />
      </button>
    </div>
  ) 
}