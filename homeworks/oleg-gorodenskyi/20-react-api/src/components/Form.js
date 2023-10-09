import { useState, useRef, useContext } from 'react';

import React from 'react'
import AddBtn from './AddBtn';
import IconBtn from './IconBtn';
import deleteAllCompleted from '../assets/delete-list.png'
import ForwardedInput from './ForwardedInput';
import { ToDoContext } from '../store/toDoContext';


const Form = () => {
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef(null)
    const {addToDo, clearAllMarkedToDo} = useContext(ToDoContext)

    const handleSubmit = (event) => {
        event.preventDefault();
        addToDo(inputValue)
        setInputValue('')
    }

    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <ForwardedInput
                inputHandler={e => setInputValue(e.target.value)}
                value={inputValue}
                placeholder="Create To-Do Task"
                handleSubmit={handleSubmit}
                ref={inputRef}
            />
            <AddBtn focusInput={focusInput} />
            <IconBtn src={deleteAllCompleted} alt='delete all marked' iconHandler={clearAllMarkedToDo} />
        </form>
    )
}

export default Form