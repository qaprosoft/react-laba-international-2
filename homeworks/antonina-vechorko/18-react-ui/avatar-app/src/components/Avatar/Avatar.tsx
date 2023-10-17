import React from 'react';
import {ApiResponse} from '../types/types';
import {FC} from 'react';

interface IAvatarProps {
  avatar: ApiResponse;
  onRefresh: () => void;
}

const Avatar: FC<IAvatarProps> = ({avatar, onRefresh}) => {
  return (
    <div onClick={onRefresh}>
      <img className="avatar__img" src={avatar.url} alt="refresh_avatar" />
    </div>
  );
};

export default Avatar;
