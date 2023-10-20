import React from 'react';

const IconButton = ({src, alt, onClick}) => {
  return (
    <button onClick={onClick}>
      <img src={src} alt={alt} />
    </button>
  );
};

export default IconButton;
