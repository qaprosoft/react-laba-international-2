import React from 'react';
import Avatar from './Avatar';
import {FC} from 'react';
import {ApiResponse} from '../types/types';

interface IAvatarsProps {
  avatars: ApiResponse[];
  onRefresh: (avatar: ApiResponse, index: number) => void;
}

const Avatars: FC<IAvatarsProps> = ({avatars, onRefresh}) => {
  return (
    <div>
      {avatars.length > 0 &&
        avatars.map((avatar, index) => (
          <Avatar
            avatar={avatar}
            key={avatar.id}
            onRefresh={() => onRefresh(avatar, index)}
          />
        ))}
    </div>
  );
};

export default Avatars;
