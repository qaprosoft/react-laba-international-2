import styles from './Input.module.css';

const Input = ({
  className,
  placeholder = '',
  value,
  onChange,
  readonly = false,
  cursor = 'inherit',
  inputRef,
}) => {
  let props = {};
  if (inputRef) props.ref = inputRef;
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
      {...props}
    />
  );
};

export default Input;
