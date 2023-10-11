import {Task} from '@/types';
import {ChangeEvent, useRef, useState, useContext, useCallback} from 'react';
import {TasksContext} from '@/contexts/TasksContext';
import Update from 'public/assets/icons/update.svg';
import Delete from 'public/assets/icons/delete.svg';
import {ErrorsContext} from '@/contexts/ErrorsContext';

interface Props {
  task: Task;
}

export default ({task}: Props) => {
  const {setError} = useContext(ErrorsContext);
  const {tasks, updateTask, deleteTask, toggleTask} = useContext(TasksContext);
  const [name, setName] = useState(task.name);
  const refInput = useRef<HTMLInputElement>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleUpdate = useCallback(() => {
    if (name !== '') {
      if (tasks.find(task => task.name === name)) {
        setError(`Task already exists`);
        setName(task.name);
        return;
      } else if (name.length >= 15) {
        setError(`Task name is too long. Max 15 characters.`);
        setName(task.name);
        return;
      }
    } else {
      setName(task.name);
      setError('Task name cannot be empty!');
      return;
    }
    updateTask({...task, name: name});
  }, [name]);

  const handleDelete = () => {
    deleteTask(task.id);
  };
  return (
    <li className="h-full w-full flex gap-3">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        className="h-full w-[9%]"
      />
      <input
        ref={refInput}
        onChange={handleChange}
        type="text"
        value={name}
        className="w-[82%] h-full text-[32px] pl-[88px]"
      />
      <button onClick={handleUpdate} className="h-auto w-[9%]">
        <Update />
      </button>
      <button onClick={handleDelete} className="h-auto w-[9%]">
        <Delete />
      </button>
    </li>
  );
};
