import React from 'react';

const IconBtn = ({iconHandler, src, alt}) => {
  return (
    <button className="iconBtn" onClick={iconHandler}>
      <img src={src} alt={alt} />
    </button>
  );
};

export default IconBtn;
