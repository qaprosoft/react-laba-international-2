import { toast } from 'react-toastify';

import constants from '@/constants';

export default function isValidInput(input: string): boolean {
  if (!input.trim().length) {
    toast.warning(constants.ErrorMessages.emptyInput);
    return false;
  }

  if (input.length > constants.Numbers.maxInputLength) {
    toast.warning(constants.ErrorMessages.tooLongInput);
    return false;
  }

  return true;
}
