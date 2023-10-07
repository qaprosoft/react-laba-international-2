const Input = ({placeholder, value, onInputChangeHandler}) => {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={onInputChangeHandler}
    />
  );
};

export default Input;
