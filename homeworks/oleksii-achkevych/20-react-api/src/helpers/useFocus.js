import {useRef} from 'react';

const useFocus = () => {
  const ref = useRef(null);

  const focus = () => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  return [ref, focus];
};

export default useFocus;
