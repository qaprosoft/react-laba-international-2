import React from 'react';
import tilesImage from './tiles.png';

const BtnShowMore = ({ onClick, disabled }) => {
    return (
        <button className="show_more" onClick={onClick} disabled={disabled}>
            <img src={tilesImage} width={240} height={240} alt="show more" />
        </button>
    );
};

export default BtnShowMore;