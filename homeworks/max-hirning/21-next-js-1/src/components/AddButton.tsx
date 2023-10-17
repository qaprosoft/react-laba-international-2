import Image from 'next/image'
import AddIcon from "../assets/add.svg";
import styles from "../styles/components/AddButton.module.css";

interface IProps {
  loading: boolean;
  onClick: () => void;
}

export function AddButton({ onClick, loading }: IProps) {
  return (
    <button 
      onClick={onClick}
      disabled={loading}
      className={styles.button}
      style={loading ? { opacity: 0.5 } : {}}
    >
      <Image
        width={70}
        height={70}
        src={AddIcon}
        alt="Add tile"
      />
    </button>
  )
}