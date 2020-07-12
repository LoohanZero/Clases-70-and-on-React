import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import CharactersPage from "./pages/CharactersPage";
import CharacterPage from "./pages/CharacterPage";
import ComicsPage from "./pages/ComicsPage";
import ComicPage from "./pages/ComicPage";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
}
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color: #202020;
    display: flex; 
    justify-content: center;
    position: relative; 
  
}
`;
const MainContainer = styled.div``;

const App = () => {
  return (
    <>
      <MainContainer>
        <GlobalStyle />

        <Router>
          <Header />

          <Switch>
            <Route exact path="/">
              <CharactersPage />
            </Route>
            <Route exact path="/characters">
              <CharactersPage />
            </Route>
            <Route exact path="/characters/:id">
              <CharacterPage />
            </Route>
            <Route exact path="/comics">
            <ComicsPage />
            </Route>
            <Route exact path="/comics/:id">
            <ComicPage />
            </Route>
            <Route>
              <h1>Not Found</h1>
            </Route>
          </Switch>
        </Router>
      </MainContainer>
    </>
  );
};

export default App;
