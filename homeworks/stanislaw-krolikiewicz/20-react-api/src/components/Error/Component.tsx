import {useContext} from 'react';
import {TasksContext} from '@/contexts/TasksContext';

export default () => {
  const {error} = useContext(TasksContext);
  return (
    <>
      {error && (
        <div className="text-red-500 text-[32px] border-2 border-red-500 flex justify-center items-center bg-red-300 fixed top-[25px] left-screen-1/2 h-[50px] w-fit p-3">
          {error}
        </div>
      )}
    </>
  );
};
