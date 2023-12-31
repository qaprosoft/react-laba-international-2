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
      } else if (name.length >= 15) {
        setError(`Task name is too long. Max 15 characters.`);
        return;
      }
      addTask(name);
      setName('');
    } else {
      setError('Task name cannot be empty!');
    }
  };
  return (
    <div className="h-[65px] w-full max-w-[676px] flex">
      <input
        ref={refInput}
        onChange={handleChange}
        type="text"
        placeholder="Create Todo-Task"
        value={name}
        className="h-full w-[82%] text-[32px] md:pl-[88px] px-[20px] overflow-ellipsis overflow-hidden"
      />
      <button
        onClick={handleSubmit}
        className="h-full w-[18%] bg-[#5275A0] text-white text-[32px]"
      >
        <span className="hidden sm:block">Add</span>
        <span className="sm:hidden">+</span>
      </button>
    </div>
  );
};
