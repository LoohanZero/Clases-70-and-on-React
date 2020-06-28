import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  color: #6585ab;
`;

const Text = styled.p`
  padding: 15px;
  font-size: 14px;
  color: gray;
`;

const Container = styled.div`
  cursor: pointer;
  background-color: white;
  border-radius: 10px;
  width: 250px;
  height: 250px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Usuarios = ({ firstname, lastname, company, email }) => {
  return (
    <Container>
      <Title>{firstname}</Title>
      <Title>{lastname}</Title>
      <Text>{company}</Text>
      <Text>{email}</Text>
    </Container>
  );
};

export default Usuarios;
