import React from 'react';

const UserCard = ({ user, onRefreshOne, refreshItem }) => {
  return (
    <div className="avatar_wrap" key={user.id}>
      <img className="avatar" src={user.url} alt="user" />
      <div className="overlay" onClick={() => onRefreshOne(user)}>
        <img className="refresh_item" src={refreshItem} alt="refresh avatar" />
      </div>
    </div>
  );
};

export default UserCard;