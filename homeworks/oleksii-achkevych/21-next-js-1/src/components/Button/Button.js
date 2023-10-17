import React from 'react';

const Button = ({onClick, disabled, text}) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
