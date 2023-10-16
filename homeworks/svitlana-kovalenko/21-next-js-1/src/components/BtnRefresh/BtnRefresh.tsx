import { FC } from 'react';
import styles from "./BtnRefresh.module.css";

interface BtnRefreshProps {
    onClick: () => void;
}

const BtnRefresh: FC<BtnRefreshProps> = ({ onClick }) => {
    return (
        <button className={styles.refresh} onClick={onClick}>
            Refresh All
        </button>
    );
};

export default BtnRefresh;
