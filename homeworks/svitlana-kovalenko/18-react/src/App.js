import './App.css';
import refreshItem from './refresh.png';
import React, { useState } from 'react';
import UserItem from './UserItem';
import BtnRefresh from './BtnRefresh';
import BtnShowMore from './BtnShowMore';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingOne, setLoadingOne] = useState(false);

  const refreshAll = () => {
    fetch(`https://tinyfac.es/api/data?limit=${users.length}&quality=0`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
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

  const refreshOne = user => {
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
            <UserItem key={user.id} user={user} onRefreshOne={refreshOne} refreshItem={refreshItem} />
        ))}
        <BtnShowMore onClick={showMore} disabled={loading} />
      </div>
      <BtnRefresh onClick={refreshAll} />
    </>
  );
};

export default App;
