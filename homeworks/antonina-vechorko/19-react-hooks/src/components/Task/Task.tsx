import React, {useCallback, useContext, useState, FC, ChangeEvent} from 'react';
import Input from '../Input/Input';
import IconButton from '../IconButton/IconButton';
import Checkbox from '../Checkbox/Checkbox';
import {TaskDispatchContext} from '../../context/Context';
import deleteIcon from '../../assets/delete.svg';
import editIcon from '../../assets/edit.svg';
import saveIcon from '../../assets/save.svg';

interface ITaskProps {
  task: {
    id: number;
    done: boolean;
    text: string;
  };
}

const Task: FC<ITaskProps> = ({task}) => {
  const dispatch = useContext(TaskDispatchContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCheckboxClick = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (dispatch) {
        dispatch({
          type: 'toggle checkbox',
          task: {
            ...task,
            done: e.target.checked,
          },
        });
      }
    },
    [dispatch, task],
  );

  const handleEditText = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (dispatch) {
        dispatch({
          type: 'edit',
          task: {
            ...task,
            text: e.target.value,
          },
        });
      }
    },
    [dispatch, task],
  );

  const handleDeleteTask = (id: number) => {
    if (dispatch) {
      dispatch({
        type: 'delete',
        id: id,
      });
    }
  };

  return (
    <div className="task-list__item">
      <Checkbox checked={task.done} onChange={e => handleCheckboxClick(e)} />
      <Input
        value={task.text}
        onChange={e => handleEditText(e)}
        disabled={!isEditing}
        placeholder=""
      />
      <div className="action__wrapper">
        {isEditing ? (
          <IconButton src={saveIcon} alt="Save" onClick={handleSave} />
        ) : (
          <IconButton src={editIcon} alt="Edit" onClick={handleEdit} />
        )}
        <IconButton
          src={deleteIcon}
          alt="Delete"
          onClick={() => handleDeleteTask(task.id)}
        ></IconButton>
      </div>
    </div>
  );
};

export default Task;
