import {useContext} from 'react';
import {ErrorsContext} from '@/contexts/ErrorsContext';

export default () => {
  const {error} = useContext(ErrorsContext);
  return (
    <>
      {error && (
        <div className="text-red-500 text-[32px] text-center border-2 border-red-500 flex justify-center items-center bg-red-300 fixed top-3 sm:top-[25px] left-screen-1/2 w-fit px-3 flex-wrap">
          {error}
        </div>
      )}
    </>
  );
};
