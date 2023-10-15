import {useEffect} from 'react';

function useEnterKeyPress(callback) {
  useEffect(() => {
    function handleKeyPress(e) {
      if (e.key === 'Enter') {
        callback();
      }
    }

    document.addEventListener('keypress', handleKeyPress);

    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, [callback]);
}

export default useEnterKeyPress;
