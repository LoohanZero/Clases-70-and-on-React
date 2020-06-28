import React from "react";
import Filter from "./Filter";
import data from "./data";
import styled from "styled-components";

const byTypes = (newArray, pokemon) => {
  return [...newArray, ...pokemon.type];
};

const byType = (newArray, type) => {
  if (!newArray.includes(type)) {
    return [...newArray, type];
  } else {
    return [...newArray];
  }
};

const Container = styled.ul`
margin-top: 50px;
  display: flex;
  flex-direction: column;
  width: 150px;
`;

const StyledFilter = styled(Filter)`
  &:hover {
    background-color: #393e46;
  }
`;

const Filters = () => {
  return (
    <Container>
      {data
        .reduce(byTypes, [])
        .reduce(byType, [])
        .map((type) => (
          <StyledFilter type={type} />
        ))}
    </Container>
  );
};

export default Filters;
