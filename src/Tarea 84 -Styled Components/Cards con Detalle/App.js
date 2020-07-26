import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import ControlLista from "./ControlLista";
import ListaUsuarios from "./ListaUsuarios";
import {VistaProvider} from "./contexts/VistaContext"


const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color: grey;
    display: flex; 
    justify-content: center;
}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1000px;
`;

const App = () => {
  return (
      <VistaProvider>
    <Container>
      <GlobalStyle />
      <ControlLista/>
      <ListaUsuarios/>
    </Container>
    </VistaProvider>
  );
};

export default App;