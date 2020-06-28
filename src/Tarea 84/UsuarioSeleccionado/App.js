import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import ControlUsuario from "./ControlUsuario";
import ListaUsuario from "./ListaUsuarios";
import { UserProvider } from "./contexts/UserContext";

const GlobalStyle = createGlobalStyle`
body {
    margin: 10px;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color: grey;
}
`;

const Container = styled.div`
  display: flex;
`;

const App = () => {
  return (
    <UserProvider>
      <GlobalStyle />
      <ListaUsuario />
      <ControlUsuario />
    </UserProvider>
  );
};

export default App;
