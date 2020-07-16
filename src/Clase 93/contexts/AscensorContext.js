import React, { createContext, useReducer } from "react";
import {
  pisoInicial,
  plantaBaja,
  subirPiso,
  bajarPiso,
  ultimoPiso,
  elegirPiso,
  ascensor,
  emergencia
} from "../AscensorDuck";

const AscensorContext = createContext();

const AscensorProvider = ({ children }) => {
  const [pisoElegido, dispatchAscensor] = useReducer(ascensor, pisoInicial);
  

  return (
    <AscensorContext.Provider
      value={{
        pisoElegido,
        dispatchAscensor,
        plantaBaja,
        subirPiso,
        bajarPiso,
        ultimoPiso,
        elegirPiso,
        emergencia
      }}
    >
      {children}
    </AscensorContext.Provider>
  );
};

export default AscensorContext;
export { AscensorProvider };
