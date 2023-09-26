import React, { useState } from 'react';
import AddAvatar from './AddAvatar';
import { fetchRandomUser } from '../helpers/fetchRandomUser';
import AvatarItem from './AvatarItem';

const AvatarList: React.FC = () => {
    const [avatarList, setAvatarList] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [avatarLoadingStates, setAvatarLoadingStates] = useState<{ [key: number]: boolean }>({});

    const addAvatar = async () => {
        setIsLoading(true);
        const newUser = await fetchRandomUser();
        if (newUser) {
            setAvatarList([...avatarList, newUser]);
            setAvatarLoadingStates((prevState) => ({
                ...prevState,
                [avatarList.length]: false,
            }));
        }
        setIsLoading(false);
    };

    const refreshAvatar = async (index: number) => {
        setIsLoading(true);
        setAvatarLoadingStates((prevState) => ({
            ...prevState,
            [index]: true,
        }));
        const newUser = await fetchRandomUser();
        if (newUser) {
            const updatedList = [...avatarList];
            updatedList.splice(index, 1);
            updatedList.splice(index, 0, newUser);
            setAvatarList(updatedList);
            setAvatarLoadingStates((prevState) => ({
                ...prevState,
                [index]: false,
            }));
        }
        setIsLoading(false);
    };

    const refreshAllAvatars = async () => {
        setIsLoading(true);
        const updatedList = await Promise.all(avatarList.map(async (_, index) => {
            setAvatarLoadingStates((prevState) => ({
                ...prevState,
                [index]: true,
            }));
            const newUser = await fetchRandomUser();
            return newUser;
        }));
        setAvatarList(updatedList);
        setIsLoading(false);
        setAvatarLoadingStates({});
    };


    return (
        <div className="flex-container">
            <div className="list-container">
                {avatarList.map((avatar, index) => (
                    <AvatarItem
                        imgUrl={avatar.url}
                        key={Math.random().toString(36).substring(7)}
                        index={index}
                        refreshAvatar={refreshAvatar}
                        isLoading={avatarLoadingStates[index] || false}
                    />
                ))}
                <AddAvatar addAvatar={addAvatar} isLoading={isLoading} />
            </div>
            <button className='refresh-all-btn' onClick={refreshAllAvatars} disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Refresh All'}
            </button>
        </div>
    );
};

export default AvatarList