import React, { useState, useReducer } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
}
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color: #C0C0C0;
    display: flex; 
    justify-content: center;
  
}
`;
const MainContainer = styled.div``;

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { on: !state.on };
    case "PRENDER":
      return { on: true };
    case "APAGAR":
      return { on: false };
    default:
      throw new Error();
  }
};

const ascensor = (state, action) => {
  switch (action.type) {
    case "PLANTA_BAJA":
      return { piso: 0 };
    case "SUBIR_PISO":
      return { piso: state.piso < 10 ? state.piso + 1 : state.piso };

    case "BAJAR_PISO":
      return { piso: state.piso > 0 ? state.piso - 1 : state.piso };

    case "ULTIMO_PISO":
      return { piso: 10 };
    case "ELEGIR_PISO":
      return {
        piso:
          action.payload >= 0 && action.payload <= 10
            ? action.payload
            : state.piso,
      };
    default:
      throw new Error();
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, { on: true });
  const [pisoElegido, dispatchAscensor] = useReducer(ascensor, { piso: 0 });

  const toggle = () => dispatch({ type: "TOGGLE" });
  const prender = () => dispatch({ type: "PRENDER" });
  const apagar = () => dispatch({ type: "APAGAR" });

  const irAPlantaBaja = () => dispatchAscensor({ type: "PLANTA_BAJA" });
  const subirUnPiso = () => dispatchAscensor({ type: "SUBIR_PISO" });
  const bajarUnPiso = () => dispatchAscensor({ type: "BAJAR_PISO" });
  const irAUltimoPiso = () => dispatchAscensor({ type: "ULTIMO_PISO" });
  const elegirPiso = (event) => {
    if (event.charCode === 13) {
      dispatchAscensor({ type: "ELEGIR_PISO", payload: event.target.value });
      
    }
    
  };

  return (
    <>
      <MainContainer>
        <GlobalStyle />
        <button onClick={toggle}>Toggle</button>
        <button onClick={prender}>Prender</button>
        <button onClick={apagar}>Apagar</button>
        {state.on ? <h1>Prendido</h1> : <h1>Apagado</h1>}

        <button onClick={irAPlantaBaja}>Ir a Planta Baja</button>
        <button onClick={subirUnPiso}>Subir un Piso</button>
        <button onClick={bajarUnPiso}>Bajar un Piso</button>
        <button onClick={irAUltimoPiso}>Ir al último Piso</button>
        <input type="number" min={0} max={10} onKeyPress={elegirPiso} />

        {<h1>{pisoElegido.piso}</h1>}
      </MainContainer>
    </>
  );
};

export default App;
