import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./Header";
import Aside from "./Aside";
import Main from "./Main";
import { PokemonProvider } from "./contexts/PokemonContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { DisplayProvider } from "./contexts/DisplayContext";

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
    height: 100%;
}

#root {
  width: 100%;
}
`;
const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const VerticalContainer = styled(Container)`
  flex-direction: column;
`;
const App = () => {
  return (
    <PokemonProvider>
      <LanguageProvider>
        <DisplayProvider>
          <Container>
            <GlobalStyle />
            <Aside />
            <VerticalContainer>
              <Header />
              <Main />
            </VerticalContainer>
          </Container>
        </DisplayProvider>
      </LanguageProvider>
    </PokemonProvider>
  );
};

export default App;
