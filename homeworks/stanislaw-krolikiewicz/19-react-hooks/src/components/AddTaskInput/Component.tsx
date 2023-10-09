import {ChangeEvent, useRef, useState, useContext} from 'react';
import {TasksContext} from '@/contexts/tasks';

export default () => {
  const {tasks, setError, addTask} = useContext(TasksContext);
  const [name, setName] = useState('');
  const refInput = useRef<HTMLInputElement>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleSubmit = () => {
    if (name !== '') {
      if (tasks.find(task => task.name === name)) {
        setError(`Task already exists`);
        return;
      }
      addTask(name);
      setName('');
    } else {
      setError('Task name cannot be empty!');
    }
  };
  return (
    <div className="addTaskInput">
      <input ref={refInput} onChange={handleChange} type="text" value={name} />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};
