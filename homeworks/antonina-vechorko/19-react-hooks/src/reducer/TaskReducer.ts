const TaskReducer = (tasks, action) => {
  switch (action.type) {
    case 'add': {
      return [
        ...tasks,
        {
          id: Date.now(),
          text: action.text,
          done: false,
        },
      ];
    }
    case 'edit': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'delete': {
      return tasks.filter(t => t.id !== action.id);
    }
    case 'toggle checkbox': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'clear all': {
      return [];
    }
    case 'clear all completed': {
      return tasks.filter(t => t.done === false);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
};

export default TaskReducer;
