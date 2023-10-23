import { FC, useState } from "react";
import Image from "next/image";
import BtnRefresh from "../BtnRefresh/BtnRefresh";
import UserItem from "../UserItem/UserItem";
import styles from "./Gallery.module.css";

interface User {
  id: number;
  url: string;
}
interface GalleryProps {
  users: User[];
}
type LoadingStates = {
  [key: number]: boolean;
}

const Gallery: FC<GalleryProps> = ({ users: propUsers }) => {
  const [users, setUsers] = useState<User[]>(Array.isArray(propUsers) ? propUsers : []);
  const [loadingOne, setLoadingOne] = useState<LoadingStates>();
  const [loading, setLoading] = useState<boolean>(false);

  const refreshAll = () => {
    if (!loading) {
      setLoading(true);

      fetch(`https://tinyfac.es/api/data?limit=${users.length}&quality=0`)
        .then(response => response.json())
        .then(data => {
          setUsers(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error:', error);
          setLoading(false);
        });
    }
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
      <div className={styles.gallery}>
        {users.length > 0 && users.map(user => (
          loadingOne && loadingOne[user.id] ? (
            <span key={user.id} className={styles.loader}>Loading...</span>
          ) :
            <UserItem key={user.id} user={user} onRefreshOne={refreshOne} />
        ))}
        <button className={styles.show_more} onClick={showMore}>
          <Image src='/tiles.png' width={240} height={240} alt="show more" />
        </button>
      </div>
      <BtnRefresh onClick={refreshAll} />
    </>
  );
}
export default Gallery;