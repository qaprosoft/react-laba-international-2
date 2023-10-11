import {Task} from '@/types';
import {
  ChangeEvent,
  useRef,
  useState,
  useContext,
  useCallback,
  useEffect,
} from 'react';
import {TasksContext} from '@/contexts/TasksContext';
import Update from 'public/assets/icons/update.svg';
import Delete from 'public/assets/icons/delete.svg';
import {ErrorsContext} from '@/contexts/ErrorsContext';
import {useValidation} from '@/hooks';

interface Props {
  task: Task;
}

export default ({task}: Props) => {
  const {setError} = useContext(ErrorsContext);
  const {tasks, updateTask, deleteTask, toggleTask} = useContext(TasksContext);
  const [name, setName] = useState(task.name);
  const [updated, setUpdated] = useState(false);
  const refInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (refInput.current) {
      refInput.current.focus();
    }
  }, []);

  useEffect(() => {
    if (updated) {
      setError('');
      setTimeout(() => {
        setUpdated(false);
      }, 1000);
    }
  }, [updated]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleUpdate = useCallback(() => {
    const {valid, error} = useValidation(name, tasks, task);
    if (valid) {
      updateTask({...task, name: name});
      setUpdated(true);
    } else {
      setName(task.name);
      setError(error);
    }
  }, [name, tasks]);

  const handleDelete = () => {
    deleteTask(task.id);
  };
  return (
    <li className="h-full w-full flex gap-3">
      <input
        name="completed"
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        className="h-full w-[9%]"
      />
      <input
        ref={refInput}
        name="name"
        onChange={handleChange}
        type="text"
        value={name}
        className={`w-[82%] h-full text-[32px] pl-[88px] transition-all duration-300 ${
          updated ? 'bg-green-300' : ''
        }`}
      />
      <button
        onClick={handleUpdate}
        className="h-auto w-[9%]"
        disabled={updated}
      >
        <Update />
      </button>
      <button onClick={handleDelete} className="h-auto w-[9%]">
        <Delete />
      </button>
    </li>
  );
};
