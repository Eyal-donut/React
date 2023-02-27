import { useState, createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [gifts, setGifts] = useState([]);

  return (
    <AppContext.Provider
      value={{
        gifts,
        setGifts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export {AppContext, AppProvider}