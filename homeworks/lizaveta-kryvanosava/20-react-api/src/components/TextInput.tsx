import { forwardRef } from 'react';

import ITextInputProps from '@/types/props/textInputProps';

import styles from './textInput.module.scss';

export default forwardRef<HTMLInputElement, ITextInputProps>(function TextInput(
  {
    onChangeHandler,
    onKeyDownHandler,
    value,
    disabled,
    placeholder = '',
    externalStyles,
  },
  ref,
) {
  return (
    <input
      ref={ref}
      disabled={disabled}
      autoFocus
      className={`${styles.input} ${externalStyles}`}
      value={value}
      type="text"
      placeholder={placeholder}
      onChange={onChangeHandler}
      onKeyDown={onKeyDownHandler}
    />
  );
});
