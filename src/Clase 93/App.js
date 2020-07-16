import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Ascensor from "./Ascensor";
import { AscensorProvider } from "./contexts/AscensorContext";
import Edificio from "./Edificio";
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
const MainContainer = styled.div`
display: flex;`;

const App = () => {
  // const [state, dispatch] = useReducer(reducer, { on: true });

  // const toggle = () => dispatch({ type: "TOGGLE" });
  // const prender = () => dispatch({ type: "PRENDER" });
  // const apagar = () => dispatch({ type: "APAGAR" });

  return (
    <AscensorProvider>
      <MainContainer>
        <GlobalStyle />
        {/* <button onClick={toggle}>Toggle</button>
        <button onClick={prender}>Prender</button>
        <button onClick={apagar}>Apagar</button>
        {state.on ? <h1>Prendido</h1> : <h1>Apagado</h1>} */}
        <Ascensor />
        <Edificio />
      </MainContainer>
    </AscensorProvider>
  );
};

export default App;
