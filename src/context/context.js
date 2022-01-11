import { createContext, useReducer, useEffect } from 'react';
import appReducer from './reducer.js';
import { RESTORE_STATE } from './actions';

export const appContext = createContext();

export const AppProvider = ({ children }) => {
  const [appState, dispatch] = useReducer(appReducer, []);

  useEffect(() => {
    const storedAppState = localStorage.getItem('appState');
    if (storedAppState)
      dispatch({ type: RESTORE_STATE, payload: JSON.parse(storedAppState) });
  }, []);

  useEffect(
    () => localStorage.setItem('appState', JSON.stringify(appState)),
    [appState]
  );

  return (
    <appContext.Provider value={{ appState, dispatch }}>
      {children}
    </appContext.Provider>
  );
};
