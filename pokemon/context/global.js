import React, { createContext } from "react";

const GlobalProvider = createContext();

export const GlobalProvider = ({ children }) => {
  return (
    <GlobalProvider.Provider value={{ hello }}>
      {children}
    </GlobalProvider.Provider>
  );
};
