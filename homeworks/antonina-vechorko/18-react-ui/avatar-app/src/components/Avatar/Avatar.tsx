import React, {FC} from 'react';
import {ApiResponse} from '../../types/types';
import refreshAvatarImg from '../../assets/refresh_avatar.svg';

interface IAvatarProps {
  avatar: ApiResponse;
  onRefresh: () => void;
}

const Avatar: FC<IAvatarProps> = ({avatar, onRefresh}) => {
  return (
    <div className="avatar__item" onClick={onRefresh}>
      <img
        className="avatar__img"
        src={avatar.url}
        alt={avatar.first_name + ' ' + avatar.last_name}
      />
      <img className="avatar__refresh" src={refreshAvatarImg} />
    </div>
  );
};

export default Avatar;
