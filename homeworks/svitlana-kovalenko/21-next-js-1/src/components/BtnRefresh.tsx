import { FC } from 'react';

interface BtnRefreshProps {
    onClick: () => void;
}

const BtnRefresh: FC<BtnRefreshProps> = ({ onClick }) => {
    return (
        <button className="refresh" onClick={onClick}>
            Refresh All
        </button>
    );
};

export default BtnRefresh;
