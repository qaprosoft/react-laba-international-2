import React from 'react';
import Avatar from '@/components/Avatar/Avatar';

const Avatars = ({avatars, onRefresh}) => {
  return avatars.map(avatar => (
    <Avatar
      avatar={avatar}
      key={avatar.id}
      onRefresh={() => onRefresh(avatar)}
    />
  ));
};

export default Avatars;
