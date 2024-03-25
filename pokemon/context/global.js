"use client";

import { createContext } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const initialState = {
    allPokemon: [],
    pokemon: {},
    pokemonDatabase: [],
    searchResults: [],
    next: "",
    loading: false,
  };

  return (
    <GlobalContext.Provider value={{ ...initialState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
