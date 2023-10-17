import { useState } from "react";
import RefreshAllUsersButton from '../components/RefreshAllUsersButton/RefreshAllUsersButton';
import User from '../components/User/User'
import {url} from '../constants/urls.js';
import addUserIcon from '../assets/img/icons/add-user.svg';



export default function HomePage({usersAvatars}) {
  const [users, setUsers] = useState(usersAvatars ? usersAvatars : []);
  const [loading, setLoading] = useState(false);

  async function fetchUsers(url, limit, quality) {
    const queryURL = `${url}?limit=${limit}&quality=${quality}`;
    try {
      const response = await fetch(queryURL);
      const json = await response.json();
      return json;
    } catch (err) {
      console.log(err.message);
    }
  }

  async function refreshAllUsers() {
    setLoading(true);
    const newUsers = await fetchUsers(url, users.length, 1);
    setUsers(users => {
      return users.map((_, index) => {
        if (index < newUsers.length) {
          return newUsers[index].url;
        }
      });
    });
    setLoading(false);
  }

  async function addUserToState() {
    const newUser = await fetchUsers(url, 1, 1);
    setUsers(users.concat(newUser[0].url));
  }

  async function updateUserAvatar(index) {
    const [newAvatar] = await fetchUsers(url, 1, 1);
    setUsers(
      users.map((item, i) => {
        if (i !== index) {
          return item;
        } else {
          return newAvatar.url;
        }
      }),
    );
  }

  return (
    <main>
      <div className="image-wrapper">
        {users.map((user, index) => (
          <User
            link={user}
            key={index}
            index={index}
            updateUserAvatar={updateUserAvatar}
            loading={loading}
          />
        ))}
        <img
          className="add-user"
          src={addUserIcon.src}
          alt="Add user tile"
          onClick={addUserToState}
        />
      </div>
      <RefreshAllUsersButton refreshAllUsers={refreshAllUsers} />
    </main>
  );
};
