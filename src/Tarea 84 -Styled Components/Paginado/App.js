import React from "react";
import { createGlobalStyle } from "styled-components";
import ControlPaginado from "./ControlPaginado";
import ListaUsuario from "./ListaUsuario";
import { PaginadoProvider } from "./contexts/PaginadoContext";

const GlobalStyle = createGlobalStyle`
body {
    margin: 10px;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color: grey;
}

#root {
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
`;


const App = () => {
  return (
    <PaginadoProvider>
      <GlobalStyle />
      <ListaUsuario />
      <ControlPaginado />
    </PaginadoProvider>
  );
};

export default App;
