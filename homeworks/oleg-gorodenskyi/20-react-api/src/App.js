import './App.css';
import { useState, useRef, useReducer } from 'react';

import ToDoItem from './components/ToDoItem';
import AddBtn from './components/AddBtn';
import IconBtn from './components/IconBtn';
import deleteAllCompleted from './assets/delete-list.png'
import ForwardedInput from './components/ForwardedInput';
import { ToDoContext, toDoReducer } from './store/toDoContext';

function App() {
  const [toDos, dispatchToDos] = useReducer(toDoReducer, [], initialValue)
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatchToDos({ type: 'Add', value: inputValue })
    setInputValue('')
  }

  function initialValue() {
    let storedData = localStorage.getItem('toDoList');
    return storedData ? JSON.parse(storedData) : []
  }

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }


  return (
    <ToDoContext.Provider value={{ toDos, dispatchToDos }}>
      <div className="App">
        <form onSubmit={handleSubmit}>
          <ForwardedInput
            inputHandler={e => setInputValue(e.target.value)}
            value={inputValue}
            placeholder="Create To-Do Task"
            handleSubmit={handleSubmit}
            ref={inputRef}
          />
          <AddBtn focusInput={focusInput} />
          <IconBtn src={deleteAllCompleted} alt='delete all marked' iconHandler={() => dispatchToDos({ type: 'ClearAllMarked' })} />
        </form>
        <div className="toDoItemList">
          {toDos.map(toDo => (
            <ToDoItem
              toDo={toDo}
              key={toDo.id}
            />
          ))}
        </div>
      </div>
    </ToDoContext.Provider>
  );
}

export default App;
