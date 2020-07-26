import React, { useContext } from "react";
import styled from "styled-components";
import PokemonContext from "./contexts/PokemonContext";

const Checkbox = styled.input`
  margin: 10px;
`;

const Texto = styled.label`
  color: white;
  margin: 0 10px;
  cursor: pointer;
`;

const Container = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 15px;
  transition: 0.3s;

  &:hover {
    background-color: #222831;
    transition: 0.3s;
    
  }
`;

const Filter = ({ type }) => {
  const { handleCheckedType } = useContext(PokemonContext);

  return (
    <Container>
      <Checkbox onChange={handleCheckedType} id={type} type="checkbox" />
      <Texto htmlFor={type}>{type}</Texto>
    </Container>
  );
};

export default Filter;
