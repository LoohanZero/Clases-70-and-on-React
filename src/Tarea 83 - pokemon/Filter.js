import React from "react";
import styled from "styled-components";

const Checkbox = styled.input`
  margin: 10px;
`;

const Texto = styled.p`
  color: white;
  margin: 0 10px;
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
  return (
    <Container>
      <Checkbox type="checkbox" />
      <Texto>{type}</Texto>
    </Container>
  );
};

export default Filter;
