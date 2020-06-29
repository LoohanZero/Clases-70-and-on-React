import React, { createContext, useState } from "react";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  return <LanguageContext.Provider>{children}</LanguageContext.Provider>;
};

export default LanguageContext;
export {LanguageProvider}
