export type ITask = {
  id: number;
  text: string;
  done: boolean;
};

export interface IAction {
  type:
    | 'add'
    | 'edit'
    | 'delete'
    | 'toggle checkbox'
    | 'clear all'
    | 'clear all completed';
  task?: ITask;
  id?: number;
  text?: string;
}

const TaskReducer = (tasks: ITask[], action: IAction) => {
  switch (action.type) {
    case 'add': {
      return [
        ...tasks,
        {
          id: Date.now(),
          text: action.text || '',
          done: false,
        },
      ];
    }
    case 'edit': {
      return tasks.map(t => {
        if (t.id === action.task!.id) {
          return action.task || t;
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
        if (t.id === action.task!.id) {
          return action.task || t;
        } else {
          return t;
        }
      });
    }
    case 'clear all': {
      return [];
    }
    case 'clear all completed': {
      return tasks.filter(t => !t.done);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
};

export default TaskReducer;
