import { createContext } from "react";
import { v4 } from 'uuid';


export const ToDoContext = createContext({
    toDos: [],
    dispatch: () => { }
})

export const toDoReducer = (state, action) => {
    let actualState = state;
    switch (action.type) {
        case 'Add': {
            let isValueExist = state.some(list => list.value === action.value);
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
                alert('This value is already exist if u want to edit');
                const updatedToDoList = actualState.map(list =>
                    list.id === action.id ? { id: list.id, value: '', completed: false } : list,
                );
                localStorage.setItem('toDoList', JSON.stringify(updatedToDoList));
                actualState = updatedToDoList
                action.setInputValue('')
            } else if (action.value.length > 25) {
                alert('The value should be not longer 25 symbols');
                const updatedToDoList = actualState.map(list =>
                    list.id === action.id ? { id: list.id, value: '', completed: false } : list,
                );
                localStorage.setItem('toDoList', JSON.stringify(updatedToDoList));
                actualState = updatedToDoList
                action.setInputValue('')
            } else {
                const updatedToDoList = actualState.map(list =>
                    list.id === action.id ? { id: list.id, value: action.value, completed: false } : list,
                );
                localStorage.setItem('toDoList', JSON.stringify(updatedToDoList));
                actualState = updatedToDoList;
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
