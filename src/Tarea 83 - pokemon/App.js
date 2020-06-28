import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./Header";
import Aside from "./Aside";
import Main from "./Main";

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
const Container = styled.div`
  display: flex;
  

`;

const VerticalContainer = styled(Container)`
flex-direction: column;`
const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Aside />
      <VerticalContainer>
        <Header />
        <Main />
      </VerticalContainer>
    </Container>
  );
};

export default App;
