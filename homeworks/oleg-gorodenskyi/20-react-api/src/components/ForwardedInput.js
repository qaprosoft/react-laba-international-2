import React, { forwardRef } from 'react';

function Input({value, inputHandler}, ref) {
  return (
    <input
      ref={ref}
      type="text"
      value={value}
      onChange={inputHandler}
    />
  );
}

const ForwardedInput = forwardRef(Input)

export default ForwardedInput;

