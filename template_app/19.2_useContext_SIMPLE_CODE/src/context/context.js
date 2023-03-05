import { useState, createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [mode, setMode] = useState('day');

  return (
    <AppContext.Provider
      value={{
        mode,
        setMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export {AppProvider}