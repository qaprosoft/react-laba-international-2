import { useCallback } from 'react';
import { toast } from 'react-toastify';

import constants from '@/constants';

import useToDoContext from './useToDoContext';

export default function useValidation() {
  const { toDos } = useToDoContext();

  const isValidToDo = useCallback(
    (input: string): boolean => {
      if (!input.trim().length) {
        toast.warning(constants.ErrorMessages.emptyInput);
        return false;
      }

      if (constants.inputValidationReqEx.test(input)) {
        toast.warning(constants.ErrorMessages.invalidInput);
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
    },
    [toDos],
  );

  return isValidToDo;
}
