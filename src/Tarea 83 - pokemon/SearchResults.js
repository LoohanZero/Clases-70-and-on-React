import React, { useContext } from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import PokemonContext from "./contexts/PokemonContext";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MainContainer = styled.div``;

const Page = styled.a`
  cursor: pointer;
  align-items: center;
  padding: 15px;
  transition: 0.3s;
  background-color: #393e46;
  color: #ffffff;
  border-radius: 10px;
  margin: 10px;

  &:hover {
    background-color: #222831;
    transition: 0.3s;
  }
`;

const SearchResults = () => {
  const {
    pokemonList,
    nextPage,
    previousPage,
    currentPage,
    toFirstPage,
    toLastPage,
  } = useContext(PokemonContext);

  return (
    <>
    {pokemonList && (
      <MainContainer>
        <Container>
          <Page onClick={toFirstPage}>{"<<"}</Page>
          <Page onClick={previousPage}>{"<"}</Page>
          {currentPage !== 1 && (
            <Page onClick={nextPage}>{currentPage - 1}</Page>
          )}
          <Page>{currentPage}</Page>
          {currentPage !== 1 && (
            <Page onClick={nextPage}>{currentPage + 1}</Page>
          )}
          <Page onClick={nextPage}>{">"}</Page>
          <Page onClick={toLastPage}>{">>"}</Page>
        </Container>
        <Container>
          {pokemonList.map((pokemon, index) =>
            pokemon.nationalPokedexNumber ? (
              <PokemonCard key={index} pokemon={pokemon} />
            ) : (
              ""
            )
          )}
        </Container>
      </MainContainer>
    )}
    </>
  );
};

export default SearchResults;
