"use client";

import React, { createContext, useContext } from "react";

const GlobalProvider = createContext();

export const GlobalProvider = ({ children }) => {
  return (
    <GlobalProvider.Provider value={{ hello }}>
      {children}
    </GlobalProvider.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalProvider);
};
