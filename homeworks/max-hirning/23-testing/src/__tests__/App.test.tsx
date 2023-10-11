import { todosReducer } from "../store/todos";
import TestRenderer from 'react-test-renderer';
import { expect, test, describe } from 'vitest';
import CreateTodoComponent from '../components/CreateTodo';

describe.concurrent('Test todos reducer', () => {
  test('Set todos', () => {
    const todos = [
      {
        id: "1",
        value: "Some value",
        isDone: false,
      },
      {
        id: "2",
        value: "Some value 2",
        isDone: false,
      },
      {
        id: "3",
        value: "Some value 3",
        isDone: false,
      }
    ]
    
    expect(todosReducer(todos, { type: "SET_TODO", payload: todos })).toStrictEqual(todos)
  })
  test('Add todo', () => {
    const todos = [
      {
        id: "1",
        value: "Some value",
        isDone: false,
      },
      {
        id: "2",
        value: "Some value 2",
        isDone: false,
      },
      {
        id: "3",
        value: "Some value 3",
        isDone: false,
      }
    ]
    const newTodo = {
      id: "4",
      value: "Some value 4",
      isDone: false,
    }
    
    expect(todosReducer(todos, { type: "ADD_TODO", payload: newTodo })).toStrictEqual([...todos, newTodo])
  })
  test('Update todo', () => {
    const todos = [
      {
        id: "1",
        value: "Some value",
        isDone: false,
      },
      {
        id: "2",
        value: "Some value 2",
        isDone: false,
      },
      {
        id: "3",
        value: "Some value 3",
        isDone: false,
      }
    ]

    expect(todosReducer(todos, { type: "UPDATE_TODO", payload: {id: "3", value: "Hello world"} })).toStrictEqual([
      {
        id: "1",
        value: "Some value",
        isDone: false,
      },
      {
        id: "2",
        value: "Some value 2",
        isDone: false,
      },
      {
        id: "3",
        value: "Hello world",
        isDone: false,
      }
    ])
  })
  test('Toggle todo', () => {
    const todos = [
      {
        id: "1",
        value: "Some value",
        isDone: false,
      },
      {
        id: "2",
        value: "Some value 2",
        isDone: true,
      },
      {
        id: "3",
        value: "Some value 3",
        isDone: false,
      }
    ]
    
    expect(todosReducer(todos, { type: "TOGGLE_TODO", payload: { id: "2" } })).toStrictEqual([
      {
        id: "1",
        value: "Some value",
        isDone: false,
      },
      {
        id: "2",
        value: "Some value 2",
        isDone: false,
      },
      {
        id: "3",
        value: "Some value 3",
        isDone: false,
      }
    ])
  })
  test('Remove todo', () => {
    const todos = [
      {
        id: "1",
        value: "Some value",
        isDone: false,
      },
      {
        id: "2",
        value: "Some value 2",
        isDone: false,
      },
      {
        id: "3",
        value: "Some value 3",
        isDone: false,
      }
    ]
    
    expect(todosReducer(todos, { type: "DELETE_TODO", payload: {id: "1"} })).toStrictEqual([
      {
        id: "2",
        value: "Some value 2",
        isDone: false,
      },
      {
        id: "3",
        value: "Some value 3",
        isDone: false,
      }
    ])
  })
})

test('Input active after button was pressed', () => {
  const component = TestRenderer.create(<CreateTodoComponent />);
  const root = component.root;

  expect(component.toJSON()).toMatchSnapshot(); 

  const input = root.findByType('input');
  input.props.onChange({ target: { value: 'Test Todo' } });

  const button = root.findByType('button');
  button.props.onClick();

  expect(component.toJSON()).toMatchSnapshot();
})