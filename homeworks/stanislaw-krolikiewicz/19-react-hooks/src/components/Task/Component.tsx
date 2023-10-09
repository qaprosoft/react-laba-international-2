import {Task} from '@/types';
import {ChangeEvent, useRef, useState, useContext} from 'react';
import {TasksContext} from '@/contexts/tasks';

interface Props {
  task: Task;
}

export default ({task}: Props) => {
  const {tasks, setError, updateTask, deleteTask} = useContext(TasksContext);
  const [name, setName] = useState(task.name);
  const refInput = useRef<HTMLInputElement>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleUpdate = () => {
    if (name !== '') {
      if (tasks.find(task => task.name === name)) {
        setError(`Task already exists`);
        setName(task.name);
        return;
      }
      updateTask({...task, name: name});
    } else {
      setName(task.name);
      setError('Task name cannot be empty!');
    }
  };
  return (
    <li>
      <input ref={refInput} onChange={handleChange} type="text" value={name} />
      <button onClick={handleUpdate}>update</button>
      <button onClick={() => deleteTask(task.id)}>delete</button>
    </li>
  );
};
