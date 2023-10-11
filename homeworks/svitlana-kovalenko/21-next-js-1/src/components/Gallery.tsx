import { FC, useState } from "react";
import Image from "next/image";
import BtnRefresh from "./BtnRefresh";
import UserItem from "./UserItem";

interface User {
  id: number;
  url: string;
}
interface GalleryProps {
  users: User[];
}

const Gallery: FC<GalleryProps> = ({ users: propUsers }) => {
  const [users, setUsers] = useState<User[]>(Array.isArray(propUsers) ? propUsers : []);
  const [loadingOne, setLoadingOne] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const refreshAll = () => {
    fetch(`https://tinyfac.es/api/data?limit=${users.length}&quality=0`)
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };


  const showMore = () => {
    if (!loading) {
      setLoading(true);

      fetch(`https://tinyfac.es/api/data?limit=1&quality=0`)
        .then(response => response.json())
        .then(data => {
          setUsers(prevUsers => [...prevUsers, ...data]);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error:', error);
          setLoading(false);
        });
    }
  };


  const refreshOne = (user: User) => {
    setLoadingOne(prevLoading => ({
      ...prevLoading,
      [user.id]: true,
    }));

    fetch(`https://tinyfac.es/api/data?limit=1&quality=0`)
      .then(response => response.json())
      .then(data => {
        const randomImageUrl = data[0].url;
        const refreshedImg = users.map(u =>
          u.id === user.id ? { ...u, url: randomImageUrl } : u,
        );
        setUsers(refreshedImg);
      })
      .catch(error => {
        console.error('Error:', error);
      })
      .finally(() => {
        setLoadingOne(prevLoading => ({
          ...prevLoading,
          [user.id]: false,
        }));
      });
  };

  return (
    <>
      <div className="gallery">
        {users.map(user => (
          loadingOne[user.id] ? (
            <span className='loader'>Loading...</span>
          ) :
            <UserItem key={user.id} user={user} onRefreshOne={refreshOne} />
        ))}
        <button className="show_more" onClick={showMore}>
          <Image src='/tiles.png' width={240} height={240} alt="show more" />
        </button>
      </div>
      <BtnRefresh onClick={refreshAll} />
    </>
  );
}
export default Gallery;