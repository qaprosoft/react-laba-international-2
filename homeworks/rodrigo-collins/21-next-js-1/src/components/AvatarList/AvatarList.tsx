import React, { useState } from 'react';
import AddAvatar from '../AddAvatar/AddAvatar';
import { fetchRandomUser } from '../../helpers/fetchRandomUser';
import AvatarItem from '../AvatarItem/AvatarItem';
import styles from './styles.module.css';

type User = {
    url?: string;
    error?: string;
}

const AvatarList: React.FC = ({ usersAvatars }: any) => {
    const [avatarList, setAvatarList] = useState<any[]>(usersAvatars || []);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [avatarLoadingStates, setAvatarLoadingStates] = useState<{ [key: number]: boolean }>({});

    const addAvatar = async () => {
        setIsLoading(true);
        setError('')
        const newUser = await fetchRandomUser();
        if (newUser) {
            setAvatarList([...avatarList, newUser]);
            setAvatarLoadingStates((prevState) => ({
                ...prevState,
                [avatarList.length]: false,
            }));
        }
        else {
            setError('Error fetching user...')
        }
        setIsLoading(false);
    };

    const refreshAvatar = async (index: number) => {
        setIsLoading(true);
        setError('')
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
        else {
            setError('Error refreshing user...')
        }
        setIsLoading(false);
    };


    const refreshAllAvatars = async () => {
        setIsLoading(true);
        setError('');

        const updatedList = await Promise.all(
            avatarList.map(async (_, index) => {
                setAvatarLoadingStates((prevState) => ({
                    ...prevState,
                    [index]: true,
                }));

                const newUser = await fetchRandomUser();

                if (newUser) {
                    return newUser;
                } else {
                    return { error: 'Error fetching user data', index };
                }
            })
        );

        const errorUsers = updatedList.filter((user: User) => user.error);

        if (errorUsers.length > 0) {
            setError('Error refreshing users...');
            setAvatarList(updatedList.filter((user: User) => !user.error));
            console.log('Users with errors:', errorUsers);
        } else {
            setAvatarList(updatedList);
        }

        setIsLoading(false);
        setAvatarLoadingStates({});
    };



    return (
        <div className={styles["flex-container"]}>
            <div className={styles["list-container"]}>
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
            <div className={styles["button-container"]}>
                <button className={styles['refresh-all-btn']} onClick={refreshAllAvatars} disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Refresh All'}
                </button>
                {
                    error && <div className={styles['error-msj']}>{error}</div>
                }
            </div>

        </div>
    );
};

export default AvatarList