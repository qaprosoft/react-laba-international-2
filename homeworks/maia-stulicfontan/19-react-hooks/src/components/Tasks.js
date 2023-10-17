import Task from './Task';

function Tasks({tasks, onEdit, onDelete, onComplete}) {
  return (
    <div className="tasks" tasks={tasks}>
      {tasks.map(task => (
        <Task
          task={task}
          key={task.id}
          isCompleted={task.isCompleted}
          onEdit={onEdit}
          onDelete={onDelete}
          onComplete={onComplete}
        ></Task>
      ))}
    </div>
  );
}

export default Tasks;
