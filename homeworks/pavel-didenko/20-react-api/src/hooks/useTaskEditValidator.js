import {useState, useMemo} from 'react';

export default function useTaskEditValidator(
  task,
  minLength,
  maxLength,
) {
  const [opacity, setOpacity] = useState(0);

  const result = useMemo(() => {
    const length = task.length;
    if (length >= minLength && length <= maxLength) {
      setOpacity(0);
      return {opacity, unique: true};
    } else {
      setOpacity(1);
      return {opacity, unique: false};
    }
  }, [task, minLength, maxLength, opacity]);
  return result;
}
