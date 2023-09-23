import { MouseEventHandler, useState } from "react";
import refreshSvg from '../assets/refresh.svg'

type AvatarItemProps = {
    imgUrl: string,
    refreshAvatar: MouseEventHandler<HTMLImageElement>,
    index: number | any
}

const AvatarItem = ({ imgUrl, refreshAvatar, index }: AvatarItemProps) => {
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
            {hovered && (
                <img
                    src={refreshSvg} // Reemplaza con la ruta de tu SVG
                    alt='refresh svg'
                    className="superimposed-svg"
                />
            )}

        </div>
    )
}

export default AvatarItem