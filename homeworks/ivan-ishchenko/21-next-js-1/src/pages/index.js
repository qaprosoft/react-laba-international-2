import {useState} from 'react';
import Link from 'next/link';
import fetchUsers from '@/utils/fetchUsers';

import AddAvatar from '@/components/AddAvatar';
import ErrorModal from '@/components/ErrorModal';
import Avatar from '@/components/Avatar';
import Spinner from '@/components/Spinner';

export default function Home() {
  const [avatars, setAvatars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const onAddHandler = async () => {
    const avatar = (await fetchUsers(setError, setIsLoading))[0];
    if (!avatar) return;
    setAvatars(prev => [...prev, {id: avatar.id, url: avatar.url}]);
  };

  const onRefreshHandler = async ind => {
    const avatar = (await fetchUsers(setError, setIsLoading))[0];
    setAvatars(prev => {
      const newArr = [...prev];
      newArr[ind] = {id: avatar.id, url: avatar.url};
      return newArr;
    });
  };

  const onRefreshAllHandler = async () => {
    const data = await fetchUsers(setError, setIsLoading, avatars.length);
    const newAvatars = data.map(user => ({id: user.id, url: user.url}));
    setAvatars(newAvatars);
  };

  if (error) {
    return <ErrorModal errorText={error} />;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="menu">
        <Link href="ssr" className="mr-10 font-bold">
          SSR
        </Link>
        <Link href="ssg" className="font-bold">
          SSG
        </Link>
      </div>

      <div className="container">
        <div className="avatars">
          {avatars.map(({id, url}, ind) => (
            <Avatar
              key={id}
              imgSrc={url}
              onClick={onRefreshHandler.bind(null, ind)}
            />
          ))}
          <AddAvatar onClick={onAddHandler} />
        </div>
        <button className="refreshAll" onClick={onRefreshAllHandler}>
          Refresh All
        </button>
      </div>
    </>
  );
}
