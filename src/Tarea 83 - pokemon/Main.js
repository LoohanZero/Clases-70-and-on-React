import React from "react";
import ResultOptions from "./ResultOptions";
import SearchResults from "./SearchResults";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = () => {
  return (
    <Container>
      <ResultOptions />
      <SearchResults />
    </Container>
  );
};

export default Main;
