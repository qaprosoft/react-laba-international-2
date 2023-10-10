import { useContext } from 'react';

import { ToDoContext } from '@/context/toDoContext';

export default function useToDoContext() {
  const toDoContext = useContext(ToDoContext);

  if (!toDoContext) {
    throw new Error('ToDo context used outside of provider');
  }

  return toDoContext;
}
