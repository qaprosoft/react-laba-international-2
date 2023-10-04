import ITextInputProps from '@/types/textInputProps';

import styles from './textInput.module.scss';

export default function TextInput({
  onChangeHandler,
  onKeyDownHandler,
  value,
  placeholder = '',
  externalStyles,
}: ITextInputProps) {
  return (
    <input
      autoFocus
      className={`${styles.input} ${externalStyles}`}
      value={value}
      type="text"
      placeholder={placeholder}
      onChange={onChangeHandler}
      onKeyDown={onKeyDownHandler}
    />
  );
}
