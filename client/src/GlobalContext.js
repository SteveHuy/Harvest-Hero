import React, { createContext, useState } from 'react';

// Create a context
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

  const [placementVariable, setPlacementVariable] = useState("");

  return (
    <GlobalContext.Provider value={{ placementVariable, setPlacementVariable }}>
      {children}
    </GlobalContext.Provider>
  );
};