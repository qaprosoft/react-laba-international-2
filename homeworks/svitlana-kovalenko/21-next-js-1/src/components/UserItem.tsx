import Image from 'next/image';
import { FC } from 'react';

interface UserItemProps {
    user: {
        id: number;
        url: string;
    };
    onRefreshOne: (user: { id: number; url: string }) => void;
}

const UserItem: FC<UserItemProps> = ({ user, onRefreshOne }) => {
    return (
        <div className="avatar_wrap" key={user.id}>
            <img
                className="avatar"
                src={user.url}
                alt="user"
                width={240}
                height={240}
            />
            <div className="overlay" onClick={() => onRefreshOne(user)}>
                <Image className="refresh_item"
                    src='/refresh.png'
                    alt="refresh avatar" width={100} height={100} />
            </div>
        </div>
    );
};

export default UserItem;
