import React, { createContext, useState } from "react";


const PaginadoContext = createContext();

const PaginadoProvider = ({ children }) => {
    const [pagina, setPagina] = useState("1");
    const [inputValue, setInputValue] = useState("10")

    
    
    const handlePaginaClick = (event) => {
        setPagina(`${event.target.value}`)        
    }

    const handleInputValue = (event) => {
        setInputValue(`${event.target.value}`)
    }

  

  return (
    <PaginadoContext.Provider value={{pagina, handlePaginaClick, inputValue, handleInputValue}}>{children}</PaginadoContext.Provider>
  );
};

export default PaginadoContext;
export {PaginadoProvider};
