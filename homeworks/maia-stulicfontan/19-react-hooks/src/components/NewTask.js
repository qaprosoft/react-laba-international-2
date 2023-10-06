import {useState} from 'react';

function NewTask({onAdd}) {
  const [taskText, setTaskText] = useState('');
  return (
    <div className="new-task">
      <input
        className="new-task__input"
        placeholder="Create new task"
        value={taskText}
        onChange={e => setTaskText(e.target.value)}
      ></input>
      <button
        className="new-task__button"
        onClick={() => {
          try {
            onAdd(taskText);
            setTaskText('');
          } catch (error) {
            alert(error);
          }
        }}
        disabled={taskText.length < 1}
      >
        Add
      </button>
    </div>
  );
}

export default NewTask;
