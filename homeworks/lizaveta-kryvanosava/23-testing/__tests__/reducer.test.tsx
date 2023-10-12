import toDoReducer from '@/context/reducer';
import constants from '@/constants';
import toDos from './dummyData/toDos';

const setDefaultState = () => {
  toDoReducer(
    { toDos: [] },
    {
      type: constants.Actions.SET_TODOS,
      payload: { toDos: toDos },
    },
  );
};

beforeEach(setDefaultState);

describe('reducer', () => {
  it('Should add new toDo', () => {
    const payload = { newToDoValue: 'value2' };

    const state = toDoReducer(
      { toDos },
      {
        type: constants.Actions.ADD_TODO_ITEM,
        payload,
      },
    );

    expect(state.toDos.length).toStrictEqual(toDos.length + 1);
    expect(state.toDos[state.toDos.length - 1].value).toStrictEqual(
      payload.newToDoValue,
    );
  });

  it('Should delete toDo', () => {
    const payload = { todoItemId: '1' };

    const state = toDoReducer(
      { toDos },
      {
        type: constants.Actions.REMOVE_TODO_ITEM,
        payload,
      },
    );

    expect(state.toDos.length).toStrictEqual(toDos.length - 1);
  });

  it('Should update toDo value', () => {
    const payload = { newToDoValue: 'task1111', todoItemId: '1' };

    const state = toDoReducer(
      { toDos },
      {
        type: constants.Actions.EDIT_TODO_ITEM,
        payload,
      },
    );

    expect(state.toDos[0].value).toStrictEqual(payload.newToDoValue);
  });

  it('Should toggle done value', () => {
    const payload = { todoItemId: '1' };

    const state1 = toDoReducer(
      { toDos },
      {
        type: constants.Actions.TOGGLE_DONE,
        payload,
      },
    );

    expect(state1.toDos[0].done).toBeTruthy();

    const state2 = toDoReducer(
      { toDos: state1.toDos },
      {
        type: constants.Actions.TOGGLE_DONE,
        payload,
      },
    );

    expect(state2.toDos[0].done).toBeFalsy();
  });

  it('Should toggle edit mode value', () => {
    const payload = { todoItemId: '1' };

    const state1 = toDoReducer(
      { toDos },
      {
        type: constants.Actions.SET_EDIT_MODE,
        payload,
      },
    );

    expect(state1.toDos[0].editMode).toBeTruthy();

    const state2 = toDoReducer(
      { toDos: state1.toDos },
      {
        type: constants.Actions.SET_EDIT_MODE,
        payload,
      },
    );

    expect(state2.toDos[0].editMode).toBeFalsy();
  });
});
