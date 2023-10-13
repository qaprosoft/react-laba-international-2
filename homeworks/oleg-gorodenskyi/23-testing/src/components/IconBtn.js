import React from 'react';

const IconBtn = ({iconHandler, src, alt, testId}) => {
  return (
    <button className="iconBtn" onClick={iconHandler} data-testid={testId}>
      <img src={src} alt={alt} />
    </button>
  );
};

export default IconBtn;
