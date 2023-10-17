import React from 'react';
import './iconButton.css';

const IconButton = ({src, clickHandler, alt}) => {
  return (
    <button className="task__button">
      <img
        className="task__icon"
        src={src}
        alt={alt}
        onClick={clickHandler}
      />
    </button>
  );
}

export default IconButton;
