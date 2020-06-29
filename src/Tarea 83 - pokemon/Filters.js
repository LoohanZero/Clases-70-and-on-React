import React, { useContext } from "react";
import Filter from "./Filter";
import styled from "styled-components";
import PokemonContext from "./contexts/PokemonContext";

const Container = styled.ul`
  margin-top: 30px;
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
  const { pokemonTypes } = useContext(PokemonContext);

  return (
    <Container>
      {pokemonTypes &&
        pokemonTypes.map((type, index) => (
          <StyledFilter key={index} type={type} />
        ))}
    </Container>
  );
};

export default Filters;
