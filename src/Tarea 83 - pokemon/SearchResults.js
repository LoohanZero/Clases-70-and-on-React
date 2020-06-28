import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import data from "./data";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SearchResults = () => {
  return (
    <Container>
      {data.map((pokemon) => (
        <PokemonCard
          id={pokemon.id}
          num={pokemon.num}
          name={pokemon.name}
          img={pokemon.img}
          type={pokemon.type}
        />
      ))}
    </Container>
  );
};

export default SearchResults;
