import React, { useContext } from "react";
import styled from "styled-components";
import DisplayContext from "./contexts/DisplayContext";

const Boton = styled.button`
  cursor: pointer;
  background-color: #32e0c4;
  color: #393e46;
  width: 200px;
  height: 50px;
  border: 2px solid #32e0c4;
  border-radius: 10px;
  font-size: 18px;
  transition: 0.3s;
  outline: none;

  &:hover {
    background-color: #51ffe3;
    transition: 0.3s;
  }
  &:active {
    background-color: #42f0d4;
    transition: 0.3s;
  }
`;

const Container = styled.div`
  margin-top: 15px;
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Select = styled.select`
  background-color: white;
  color: #393e46;
  width: 250px;
  height: 50px;
  border: 1px solid #393e46;
  border-radius: 10px;
  font-size: 18px;
  padding-left: 15px;
  outline: none;
`;

const Option = styled.option``;

const ResultOptions = () => {
  const { showThreeColumns, showFourColumns } = useContext(DisplayContext);

  return (
    <Container>
      <Select>
        <Option>Ordenar por Número</Option>
        <Option>Ordenar por Nombre</Option>
      </Select>
      <Boton onClick={showThreeColumns}>Mostrar 3</Boton>
      <Boton onClick={showFourColumns}>Mostrar 4</Boton>
    </Container>
  );
};

export default ResultOptions;
