import {useContext} from 'react';
import {TasksContext} from '@/contexts/tasks';

export default () => {
  const {error} = useContext(TasksContext);
  return <>{error && <div className="text-red-500">{error}</div>}</>;
};
