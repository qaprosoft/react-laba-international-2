import { v4 } from 'uuid';
import { ToDoContext } from './toDoContext';
import { useReducer } from 'react';


export const toDoReducer = (state, action) => {
    let actualState = state;
    switch (action.type) {
        case 'Add': {
            let isValueExist = actualState.some(list => list.value === action.value);
            if (isValueExist) {
                alert('This value is already exist');
            } else if (action.value.length > 25) {
                alert('The value should be not longer than 25 symbols');
            } else {
                const id = v4();
                const storedData = [
                    ...state,
                    { value: action.value, isCompleted: false, id },
                ];

                localStorage.setItem('toDoList', JSON.stringify(storedData));
                actualState = storedData

            }
            break;
        }
        case 'EditToDo': {
            let isValueExist = actualState.some(list => list.value === action.value);

            if (isValueExist) {
                alert('This value is already exist in ToDo and you can"t edit');
            } else if (action.value.length > 25) {
                alert('The value should be not longer 25 symbols');
            } else {
                const updatedToDoList = actualState.map(list =>
                    list.id === action.id ? { id: list.id, value: action.value, completed: false } : list,
                );
                localStorage.setItem('toDoList', JSON.stringify(updatedToDoList));
                actualState = updatedToDoList;
                action.setIsEdit(false)
            }
            break
        }
        case 'Delete': {
            const updatedToDoList = state.filter(list => list.id !== action.id);
            localStorage.setItem('toDoList', JSON.stringify(updatedToDoList));
            actualState = updatedToDoList
            break
        }
        case 'ToggleMarked': {
            const updatedToDoList = state.map(list =>
                list.id === action.id ? { id: action.id, value: action.value, completed: action.completed } : list,
            );
            localStorage.setItem('toDoList', JSON.stringify(updatedToDoList));
            actualState = updatedToDoList;
            break
        }
        case 'ClearAllMarked': {
            const filteredToDoList = state.filter(list => list.isCompleted === false)
            localStorage.setItem('toDoList', JSON.stringify(filteredToDoList))
            actualState = filteredToDoList
            break;
        }

        default: {
            throw Error('We don"t have action: ' + action.type);
        }
    }
    return actualState
}

const ToDoProvider = (props) => {
    const [toDos, dispatchToDos] = useReducer(toDoReducer, [], initialValue)

    function initialValue() {
        let storedData = localStorage.getItem('toDoList');
        return storedData ? JSON.parse(storedData) : []
    }

    const addToDo = (inputValue) => {
        dispatchToDos({ type: 'Add', value: inputValue })
    }

    const clearAllMarkedToDo = () => {
        dispatchToDos({ type: 'ClearAllMarked' })
    }

    const deleteToDo = (id) => {
        dispatchToDos({ type: 'Delete', id: id })
    }

    const editToDo = (value, id, setIsEdit) => {
        dispatchToDos({ type: 'EditToDo', value, id, setIsEdit })
    }

    const cartContext = {
        toDos,
        dispatchToDos,
        addToDo,
        clearAllMarkedToDo,
        editToDo,
        deleteToDo,
    }

    return (
        <ToDoContext.Provider value={cartContext}>
            {props.children}
        </ToDoContext.Provider>
    )
}

export default ToDoProvider
