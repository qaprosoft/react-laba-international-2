import React, {useState, useEffect} from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';
import ToDoForm from '../ToDoForm/ToDoForm';

const MAX_TODO_LENGTH = 30;

const ToDoList = () => {
  const [toDos, setToDos] = useState([]);
  const [newToDo, setNewToDo] = useState('');
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const storedToDos = localStorage.getItem('toDos');
    if (storedToDos) {
      setToDos(JSON.parse(storedToDos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('toDos', JSON.stringify(toDos));
  }, [toDos]);

  const addToDo = () => {
    if (newToDo.trim() === '') {
      window.alert('to-do name cannot be empty');
      return;
    }
    if (newToDo.length > MAX_TODO_LENGTH) {
      window.alert('to-do name exceeds the maximum length');
      return;
    }

    if (toDos.some(todo => todo.text === newToDo)) {
      window.alert('duplicate to-do item');
      return;
    }

    const newToDoItem = {id: Date.now(), text: newToDo, completed: false};
    setToDos([...toDos, newToDoItem]);
    setNewToDo('');
  };

  const editToDo = (id, newText) => {
    const updatedToDos = [...toDos];
    const index = updatedToDos.findIndex(todo => todo.id === id);
    if (index !== -1) {
      updatedToDos[index].text = newText;
      setToDos(updatedToDos);
      setEditingId(null);
    }
  };

  const deleteToDo = id => {
    const updatedToDos = toDos.filter(todo => todo.id !== id);
    setToDos(updatedToDos);
  };

  const toggleCompletion = id => {
    const updatedToDos = [...toDos];
    const index = updatedToDos.findIndex(todo => todo.id === id);
    if (index !== -1) {
      updatedToDos[index].completed = !updatedToDos[index].completed;
      setToDos(updatedToDos);
      localStorage.setItem('toDos', JSON.stringify(updatedToDos));
    }
  };

  return (
    <div>
      <ToDoForm newToDo={newToDo} setNewToDo={setNewToDo} addToDo={addToDo} />

      <ul>
        {toDos.map(toDo => (
          <ol key={toDo.id}>
            <ToDoItem
              text={toDo.text}
              isEditing={editingId === toDo.id}
              completed={toDo.completed}
              onChange={newText => editToDo(toDo.id, newText)}
              onDelete={() => deleteToDo(toDo.id)}
              onToggleCompletion={() => toggleCompletion(toDo.id)}
            />
          </ol>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
