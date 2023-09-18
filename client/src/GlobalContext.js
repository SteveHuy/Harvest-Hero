import React, { createContext, useState } from 'react';

// Create a context
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

  const [placementVariable, setPlacementVariable] = useState("");
  const [plantData, setPlantData] = useState("");
  const [recipeData, setRecipeData] = useState(null);

  return (
    <GlobalContext.Provider value={{ placementVariable, setPlacementVariable, plantData, setPlantData, recipeData, setRecipeData }}>
      {children}
    </GlobalContext.Provider>
    
  );
};