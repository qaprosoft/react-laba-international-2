import {useRef} from 'react';
import {useDispatch, useTasks} from '../context/TasksProvider';
import useInput from '../hooks/useInput';
import useTaskValidation from '../hooks/useTaskValidation';

export default function AddTask() {
  const tasks = useTasks();
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const [inputValue, setInputValue, handleChange] = useInput('');
  const validateTask = useTaskValidation(tasks);

  const handleAddTask = () => {
    if (validateTask(inputValue)) {
      dispatch({
        type: 'added',
        text: inputValue,
        id: crypto.randomUUID(),
        isCompleted: false,
      });
      inputRef.current.focus();
      setInputValue('');
      return;
    }
    inputRef.current.focus();
  };

  return (
    <div className="new-task">
      <input
        className="new-task__input"
        placeholder="Create new task"
        value={inputValue}
        onChange={handleChange}
        ref={inputRef}
      />
      <button
        className="new-task__button"
        onClick={handleAddTask}
        disabled={inputValue.length < 1}
      >
        Add
      </button>
    </div>
  );
}
