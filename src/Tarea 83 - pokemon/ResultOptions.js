import React from "react";
import styled from "styled-components";

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
      background-color: #51FFE3;
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

const ResultOptions = () => {
  return (
    <Container>
      <Boton>Mostrar 3</Boton>
      <Boton>Mostrar 4</Boton>
    </Container>
  );
};

export default ResultOptions;
