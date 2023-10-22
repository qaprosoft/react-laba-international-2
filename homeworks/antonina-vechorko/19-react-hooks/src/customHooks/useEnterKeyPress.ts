import {useEffect} from 'react';

const useEnterKeyPress = callback => {
  useEffect(() => {
    const handleKeyPress = e => {
      if (e.key === 'Enter') {
        callback();
      }
    };

    document.addEventListener('keypress', handleKeyPress);

    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, [callback]);
};

export default useEnterKeyPress;
