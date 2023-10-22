import React, {forwardRef} from 'react';

const Input = forwardRef(
  ({value, placeholder, onChange, disabled = false}, ref) => {
    return (
      <input
        type="text"
        ref={ref}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
    );
  },
);

export default Input;
