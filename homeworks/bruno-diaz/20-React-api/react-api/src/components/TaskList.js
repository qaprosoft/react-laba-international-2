import { TaskItem } from "./TaskItem";

export function TaskList({
  tasks,
  handleUpdateTask,
  handleDeleteTask,
  handleCompleteTask,
}) {
  return (
    <>
      {tasks.map((task) => {
        return (
          <TaskItem
            key={task.id}
            task={task}
            handleUpdateTask={handleUpdateTask}
            handleDeleteTask={handleDeleteTask}
            handleCompleteTask={handleCompleteTask}
          />
        );
      })}
    </>
  );
}
