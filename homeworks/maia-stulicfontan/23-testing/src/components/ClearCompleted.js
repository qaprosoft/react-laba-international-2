import {memo, useCallback} from 'react';
import {useDispatch} from '../context/TasksProvider';

const ClearCompleted = memo(function ClearCompleted({isDisplayed}) {
  const dispatch = useDispatch();

  const handleClearCompleted = useCallback(() => {
    dispatch({type: 'clearedCompleted'});
  }, [dispatch]);

  return (
    isDisplayed && (
      <footer className="footer">
        <button
          className="footer__button"
          onClick={handleClearCompleted}
          aria-label="Clear completed"
        >
          Clear completed tasks
        </button>
      </footer>
    )
  );
});

export default ClearCompleted;
