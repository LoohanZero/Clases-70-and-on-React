import React from "react";
import styled from "styled-components";

const StyledPokemonCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 350px;
  width: 270px;
  background-color: white;
  border-radius: 15px;
  margin: 15px;
  color: #393e46;
  box-shadow: 7px 7px 15px -11px rgba(0,0,0,0.67);
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

const PokemonCard = ({ id, num, name, img, type }) => {
  return (
    <StyledPokemonCard id={id}>
      <TitleContainer>
        <PokemonName>{name}</PokemonName>
        <PokemonNumber>{num}</PokemonNumber>
      </TitleContainer>
      <Container>
        <PokemonImg src={img} />
      </Container>
      <PokemonTypeList>
        {type.map((types) => (
          <PokemonType>{types}</PokemonType>
        ))}
      </PokemonTypeList>
    </StyledPokemonCard>
  );
};

export default PokemonCard;
