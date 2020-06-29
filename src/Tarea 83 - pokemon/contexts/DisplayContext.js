import React, { useState, createContext } from "react";

const DisplayContext = createContext();

const DisplayProvider = ({ children }) => {
  const [columnsDisplayed, setColumnsDisplayed] = useState(3);

  const showThreeColumns = () => {
    setColumnsDisplayed(3);
  };

  const showFourColumns = () => {
    setColumnsDisplayed(4);
  };

  return (
    <DisplayContext.Provider
      value={{ columnsDisplayed, showThreeColumns, showFourColumns }}
    >
      {children}
    </DisplayContext.Provider>
  );
};

export { DisplayProvider };
export default DisplayContext;
