export default function reducer(state, action) {
  switch (action.type) {
    case 'task_added': {
      return [
        ...state,
        {id: Date.now(), taskText: action.text, completed: false},
      ];
    }

    case 'task_modified': {
      return state.map((task, index) => {
        if (index !== action.index) {
          return task;
        } else {
          task.taskText = action.text;
          task.id = Date.now();
          return task;
        }
      });
    }

    case 'task_removed': {
      return state.filter((_, index) => index !== action.index);
    }

    case 'tasks_extracted': {
      return action.tasks;
    }

    case 'task_completed': {
      return state.map((task, index) => {
        if (index !== action.index) {
          return task;
        } else {
          task.completed = !task.completed;
          return task;
        }
      });
    }

    case 'remove_completed_tasks': {
      return state.filter(task => !task.completed);
    }

    default: {
      throw new Error('Unknows use case');
    }
  }
}
