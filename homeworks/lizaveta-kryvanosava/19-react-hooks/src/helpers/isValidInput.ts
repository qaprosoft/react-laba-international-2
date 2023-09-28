import { toast } from 'react-toastify';

import constants from '@/constants';
import IToDo from '@/types/toDo';

export default function isValidInput(toDos: IToDo[], input: string): boolean {
  if (!input.trim().length) {
    toast.warning(constants.ErrorMessages.emptyInput);
    return false;
  }

  if (input.length > constants.Numbers.maxInputLength) {
    toast.warning(constants.ErrorMessages.tooLongInput);
    return false;
  }

  if (toDos.some(item => item.value === input)) {
    toast.warning(constants.ErrorMessages.duplicate);
    return false;
  }

  return true;
}
