import React from 'react';

const Input = ({value, inputHandler, placeholder}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={inputHandler}
    />
  );
};

export default Input;
