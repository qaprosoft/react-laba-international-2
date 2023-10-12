import NewTask from './NewTask';
import Tasks from './Tasks';
import validateTask from '../utils/validateTask';
import {useEffect} from 'react';
import {useState} from 'react';

function App() {
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(savedTasks);

  useEffect(() => {
    if (tasks) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const handleAddTask = taskText => {
    if (validateTask(tasks, taskText)) {
      setTasks([
        ...tasks,
        {
          text: taskText,
          id: crypto.randomUUID(),
          isCompleted: false,
        },
      ]);
    }
  };

  const handleEditTask = (taskId, newText) => {
    if (
      validateTask(
        tasks.filter(task => task.id !== taskId),
        newText,
      )
    ) {
      setTasks(
        tasks.map(task =>
          task.id === taskId ? {...task, text: newText} : {...task},
        ),
      );
    }
  };

  const handleDeleteTask = taskId => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleCompleteTask = (taskId, isCompleted) => {
    setTasks(
      tasks.map(task =>
        task.id === taskId ? {...task, isCompleted: isCompleted} : {...task},
      ),
    );
  };

  return (
    <div className="page-wrapper">
      <header className="header">
        <h1 className="title">To-Do List</h1>
      </header>
      <NewTask onAdd={handleAddTask} />
      <Tasks
        tasks={tasks}
        onEdit={handleEditTask}
        onDelete={handleDeleteTask}
        onComplete={handleCompleteTask}
      />
    </div>
  );
}

export default App;
