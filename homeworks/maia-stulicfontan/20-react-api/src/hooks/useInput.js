import {useState} from 'react';

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const handleChange = e => {
    setValue(e.target.value);
  };
  return [value, setValue, handleChange];
}

export default useInput;
