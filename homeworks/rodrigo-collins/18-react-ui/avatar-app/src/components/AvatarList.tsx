import React, { useState } from 'react';
import AddAvatar from './AddAvatar';
import { fetchRandomUser } from '../helpers/fetchRandomUser';
import AvatarItem from './AvatarItem';

const AvatarList: React.FC = () => {
    const [avatarList, setAvatarList] = useState<any[]>([]);

    const addAvatar = async () => {
        const newUser = await fetchRandomUser()
        if (newUser) {
            setAvatarList([...avatarList, newUser]);
        }
    };

    const refreshAvatar = async (index: number) => {
        const newUser = await fetchRandomUser();
        if (newUser) {
            const updatedList = [...avatarList];
            updatedList.splice(index, 1);
            updatedList.splice(index, 0, newUser);
            setAvatarList(updatedList);
        }
    };
    const refreshAllAvatars = async () => {
        const updatedList = await Promise.all(avatarList.map(async () => {
            const newUser = await fetchRandomUser();
            return newUser;
        }));
        setAvatarList(updatedList);
    };


    return (
        <div className="flex-container">
            <div className="list-container">
                {avatarList.map((avatar, index) => (
                    <AvatarItem imgUrl={avatar.url} key={Math.random().toString(36).substring(7)} index={index} refreshAvatar={refreshAvatar} />
                ))}
                <AddAvatar addAvatar={addAvatar} />
            </div>
            <button className='refresh-all-btn' onClick={refreshAllAvatars}>Refresh All</button>
        </div>
    );
};

export default AvatarList;
