import {createContext} from 'react';

export type MainContextType = {
  userId: string;
};
export const MainContext = createContext<MainContextType>({userId: ''});
