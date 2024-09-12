import React, { createContext, useReducer, useContext, ReactNode, Dispatch } from 'react';

type State = {
  user: any | null;
  isLegacy: boolean | null,
};

type Action = { type: 'SET_USER'; payload: any; isLegacy: boolean} | { type: 'CLEAR_USER' };

const initialState: State = {
  user: null,
  isLegacy: null,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload, isLegacy: action.isLegacy };
    case 'CLEAR_USER':
      return { ...state, user: null, isLegacy: null };
    default:
      return state;
  }
};

const StateContext = createContext<State | undefined>(undefined);
const DispatchContext = createContext<Dispatch<Action> | undefined>(undefined);

export const GlobalStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export const useGlobalState = (): State => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};

export const useGlobalDispatch = (): Dispatch<Action> => {
  const context = useContext(DispatchContext);
  if (context === undefined) {
    throw new Error('useGlobalDispatch must be used within a GlobalStateProvider');
  }
  return context;
};
