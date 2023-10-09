import {useState} from 'react';

export const useTaskValidation = (
  initialValue = '',
  minLength = 0,
  maxLength = 20,
) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(validate(initialValue));

  function validate(value) {
    if (value.length <= minLength)
      return `Task text should contain more than ${minLength} characters`;
    else if (value.length > maxLength)
      return `Task text should contain less than ${maxLength} characters`;
  }

  const onChangeHandler = e => {
    // remove previous error
    setError(null);
    const text = e.target.value.trim();
    const error = validate(text);
    if (error) setError(error);
    setValue(text);
  };

  const eraseValue = () => setValue('');

  const revertToInitial = () => setValue(initialValue);

  return [value, error, onChangeHandler, eraseValue, revertToInitial];
};
