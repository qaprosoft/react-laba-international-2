import localStorageKeys from '../constants/constants';

export const saveDataToStorage = data => {
  localStorage.setItem(localStorageKeys.TODOS, JSON.stringify(data));
};
