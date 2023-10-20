import React from 'react';

const Input = ({type, value, onChange, disabled = false}) => {
  return (
    <input
      type={type}
      value={value}
      placeholder="Create Todo-Task"
      onChange={e => onChange(e.target.value)}
      disabled={disabled}
    />
  );
};

export default Input;
