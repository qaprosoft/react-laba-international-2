import React, {forwardRef} from 'react';

const Input = forwardRef(({type, value, onChange, disabled = false}, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      value={value}
      placeholder="Create Todo-Task"
      onChange={e => onChange(e.target.value)}
      disabled={disabled}
    />
  );
});

export default Input;
