import { useState } from "react";
import refreshSvg from '../assets/refresh.svg'

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
        <div className='avatar-container'
            style={bgStyle}
            onClick={() => refreshAvatar(index)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {isLoading ? (
                <p className="loading-text">Loading...</p>
            ) : (
                hovered && (
                    <img
                        src={refreshSvg}
                        alt='refresh svg'
                        className="superimposed-svg"
                    />
                )
            )}
        </div>
    )
}

export default AvatarItem