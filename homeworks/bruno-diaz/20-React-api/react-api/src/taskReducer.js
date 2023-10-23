export function taskReducer(initialState, action) {
  switch (action.type) {
    case "add-task":
      return [...initialState, action.payload];

    case "delete-task":
      return initialState.filter((task) => task.id !== action.payload);

    case "complete-task":
      return initialState.map((task) => {
        if (task.id === action.payload) {
          return {
            ...task,
            done: !task.done,
          };
        }

        return task;
      });

    case "update-task":
      return initialState.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            description: action.payload.description,
          };
        }
        return task;
      });

    case "delete-completed-tasks":
      return initialState.filter((task) => !task.done);

    default:
      return initialState;
  }
}
