export default function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          text: action.text,
          id: action.id,
          isCompleted: action.isCompleted,
        },
      ];
    }
    case 'edited': {
      return tasks.map(task =>
        task.id === action.id ? {...task, text: action.text} : {...task},
      );
    }
    case 'deleted': {
      return tasks.filter(task => task.id !== action.id);
    }
    case 'completed': {
      return tasks.map(task =>
        task.id === action.id
          ? {...task, isCompleted: action.isCompleted}
          : {...task},
      );
    }
    case 'clearedCompleted': {
      return tasks.filter(task => !task.isCompleted);
    }
    default:
      console.log('Unknown action: ', action);
  }
}
