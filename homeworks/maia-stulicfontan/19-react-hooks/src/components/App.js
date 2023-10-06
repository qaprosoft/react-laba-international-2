import NewTask from './NewTask';
import Tasks from './Tasks';
import validateTask from '../utils/validateTask';
import tasksReducer from '../utils/tasksReducer';
import {useEffect} from 'react';
import {useReducer} from 'react';

function App() {
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, dispatch] = useReducer(tasksReducer, savedTasks);

  useEffect(() => {
    if (tasks) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const handleAddTask = taskText => {
    if (validateTask(tasks, taskText)) {
      dispatch({
        type: 'added',
        text: taskText,
        id: crypto.randomUUID(),
        isCompleted: false,
      });
    }
  };

  const handleEditTask = (taskId, newText) => {
    if (
      validateTask(
        tasks.filter(task => task.id !== taskId),
        newText,
      )
    ) {
      dispatch({type: 'edited', id: taskId, text: newText});
    }
  };

  const handleDeleteTask = taskId => {
    dispatch({type: 'deleted', id: taskId});
  };

  const handleCompleteTask = (taskId, isCompleted) => {
    dispatch({type: 'completed', id: taskId, isCompleted: isCompleted});
  };

  return (
    <div className="page-wrapper">
      <header className="header">
        <h1 className="title">To-Do List</h1>
      </header>
      <NewTask onAdd={handleAddTask}></NewTask>
      <Tasks
        tasks={tasks}
        onEdit={handleEditTask}
        onDelete={handleDeleteTask}
        onComplete={handleCompleteTask}
      ></Tasks>
    </div>
  );
}

export default App;
