import React, { createContext, useState } from "react";

const VistaContext = createContext();

const VistaProvider = ({ children }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(true);
    console.log(showDetails)
  };

  const handleHideDetails = () => {
    setShowDetails(false);
  };
  return (
    <VistaContext.Provider
      value={{ showDetails, handleShowDetails, handleHideDetails }}
    >
      {children}
    </VistaContext.Provider>
  );
};

export default VistaContext;
export { VistaProvider };
