import React, {forwardRef, ChangeEvent} from 'react';

interface IInputProps {
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
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
