import { createContext, Dispatch } from 'react';
import { AnyAction } from 'redux';

export type ContextType = {
  state: any;
  dispatch: Dispatch<AnyAction>;
};

const AppContext = createContext({} as ContextType);

export default AppContext;
