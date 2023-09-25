import './App.css';
import tilesImage from './tiles.png';
import refreshItem from './refresh.png';
import React, {useState} from 'react';

const App = () => {
  const [users, setUsers] = useState([]);

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
    fetch(`https://tinyfac.es/api/data?limit=7&quality=0`)
      .then(response => response.json())
      .then(data => {
        setUsers(prevUsers => [...prevUsers, ...data]);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const refreshOne = user => {
    fetch(`https://tinyfac.es/api/data?limit=1&quality=0`)
      .then(response => response.json())
      .then(data => {
        const randomImageUrl = data[0].url;
        const updatedUser = users.map(u =>
          u.id === user.id ? {...u, url: randomImageUrl} : u,
        );
        setUsers(updatedUser);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <div className="gallery">
        {users.map(user => (
          <div className="avatar_wrap" key={user.id}>
            <img className="avatar" src={user.url} alt="user" />
            <div className="overlay" onClick={() => refreshOne(user)}>
              <img
                className="refresh_item"
                src={refreshItem}
                alt="refresh avatar"
              />
            </div>
          </div>
        ))}

        <button className="show_more" onClick={showMore}>
          <img src={tilesImage} width={240} height={240} alt="show more"></img>
        </button>
      </div>
      <button className="refresh" onClick={refreshAll}>
        Refresh All
      </button>
    </>
  );
};

export default App;
