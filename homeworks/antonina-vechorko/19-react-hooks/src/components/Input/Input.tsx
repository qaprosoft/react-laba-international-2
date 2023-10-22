import React, {forwardRef} from 'react';

const Input = forwardRef(({value, onChange, disabled = false}, ref) => {
  return (
    <input
      ref={ref}
      value={value}
      placeholder="Create Todo-Task"
      onChange={onChange}
      disabled={disabled}
    />
  );
});

export default Input;
