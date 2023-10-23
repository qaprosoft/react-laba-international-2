import { useState } from "react";
import styles from './styles.module.css';


type AvatarItemProps = {
    imgUrl: string,
    refreshAvatar: (index: number) => Promise<void>,
    index: number | any,
    isLoading: boolean,
}

const AvatarItem = ({ imgUrl, refreshAvatar, index, isLoading }: AvatarItemProps) => {
    const [hovered, setHovered] = useState<boolean>(false);
    const bgStyle = {
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div className={styles['avatar-container']}
            style={bgStyle}
            onClick={() => refreshAvatar(index)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {isLoading ? (
                <p className={styles["loading-text"]}>Loading...</p>
            ) : (
                hovered && (
                    <img
                        src={'/assets/refresh.svg'}
                        alt='refresh svg'
                        className={styles["superimposed-svg"]}
                    />
                )
            )}
        </div>
    )
}

export default AvatarItem