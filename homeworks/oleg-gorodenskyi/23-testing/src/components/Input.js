import React from 'react';

const Input = ({ value, inputHandler, placeholder, testId }) => {
  return (
    <input
      data-testid={testId}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={inputHandler}
    />
  );
};

export default Input;
