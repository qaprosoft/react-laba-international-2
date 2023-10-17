import {ChangeEvent, useRef, useState, useContext} from 'react';
import {TasksContext} from '@/contexts/TasksContext';
import {ErrorsContext} from '@/contexts/ErrorsContext';
import {useValidation} from '@/hooks';

export default () => {
  const {setError} = useContext(ErrorsContext);
  const {tasks, addTask} = useContext(TasksContext);
  const [name, setName] = useState('');
  const refInput = useRef<HTMLInputElement>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleSubmit = () => {
    const {valid, error} = useValidation(name, tasks);
    if (valid) {
      addTask(name);
      setName('');
      setError('');
    } else {
      setError(error);
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
