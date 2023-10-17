import {useContext} from 'react';
import {TasksContext} from '@/contexts/tasks';

export default () => {
  const {error} = useContext(TasksContext);
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
