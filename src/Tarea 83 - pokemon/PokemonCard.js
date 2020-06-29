import React, { useContext } from "react";
import styled from "styled-components";
import DisplayContext from "./contexts/DisplayContext";

const StyledPokemonCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 350px;
  width: ${(prop) => Math.ceil(65 / prop.columns)}%;
  background-color: white;
  border-radius: 15px;
  margin: 15px;
  padding: 15px;
  color: #393e46;
  box-shadow: 7px 7px 15px -11px rgba(0, 0, 0, 0.67);
`;

const PokemonName = styled.h1`
  font-size: 18px;
`;

const PokemonNumber = styled.h2`
  font-size: 18px;
`;
const Container = styled.div`
  display: flex;
`;
const TitleContainer = styled(Container)`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`;

const PokemonImg = styled.img`
  border-radius: 10px;
  width: 200px;
  background-color: #eeeeee;
`;
const PokemonTypeList = styled.ul`
  display: flex;
  list-style: none;
`;
const PokemonType = styled.li`
  font-size: 16px;
  color: #222831;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
  background-color: #32e0c4;
`;

const PokemonCard = ({ pokemon }) => {
  const { columnsDisplayed } = useContext(DisplayContext);

  return (
    <>
      {columnsDisplayed && (
        <StyledPokemonCard columns={columnsDisplayed}>
          <TitleContainer>
            <PokemonName>{pokemon.name}</PokemonName>
            <PokemonNumber>{pokemon.nationalPokedexNumber}</PokemonNumber>
          </TitleContainer>
          <Container>
            <PokemonImg src={pokemon.imageUrl} />
          </Container>
          <PokemonTypeList>
            {pokemon.types &&
              pokemon.types.map((type, index) => (
                <PokemonType key={index}>{type}</PokemonType>
              ))}
          </PokemonTypeList>
        </StyledPokemonCard>
      )}
    </>
  );
};

export default PokemonCard;
