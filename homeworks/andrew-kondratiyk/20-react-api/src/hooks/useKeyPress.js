import {useEffect, useState} from 'react';

export default function useKeyPress(targetKey, target = window) {
  const [keyPressed, setKeyPressed] = useState(false);
  const downHandler = ({key}) => {
    if (key === targetKey) setKeyPressed(true);
  };
  const upHandler = ({key}) => {
    if (key === targetKey) setKeyPressed(false);
  };
  useEffect(() => {
    target.addEventListener('keydown', downHandler);
    target.addEventListener('keyup', upHandler);
    return () => {
      target.removeEventListener('keydown', downHandler);
      target.removeEventListener('keyup', upHandler);
    };
  }, []);
  return keyPressed;
}
