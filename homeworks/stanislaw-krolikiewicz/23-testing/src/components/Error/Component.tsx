import {useContext} from 'react';
import {ErrorsContext} from '@/contexts/ErrorsContext';

export default () => {
  const {error} = useContext(ErrorsContext);
  return (
    <>
      {error && (
        <div
          datatest-id="error"
          className="text-red-500 text-[32px] border-2 border-red-500 flex justify-center items-center bg-red-300 fixed top-[25px] left-screen-1/2 h-[50px] w-fit p-3"
        >
          {error}
        </div>
      )}
    </>
  );
};
