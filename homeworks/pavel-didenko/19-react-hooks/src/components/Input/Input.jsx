import React from 'react';
import './input.css';
import { useRef } from 'react';

const Input = ({placeholder, setTaskText}) => {
  const toDoTaskText = useRef(null)
  return (
    <input
      placeholder={placeholder}
      ref={toDoTaskText}
      onInput={() => setTaskText(toDoTaskText.current.value)}
    ></input>
  );
};

export default Input;
