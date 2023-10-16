import {forwardRef} from 'react';
import styles from './Input.module.css';

const Input = forwardRef(
  (
    {
      className,
      placeholder = '',
      value,
      onChange,
      readonly = false,
      cursor = 'inherit',
    },
    ref,
  ) => {
    return (
      <input
        className={`${className} ${styles.input}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        readOnly={readonly}
        style={{
          cursor,
        }}
        ref={ref}
      />
    );
  },
);

export default Input;
