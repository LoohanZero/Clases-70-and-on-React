import React, {useContext} from "react";
import styled from "styled-components";
import UserContext from "./contexts/UserContext"

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

const Usuario = ({ id, name, company }) => {
  const { handleUserClick} = useContext(UserContext)


  return (
    <Container id={id} onClick={handleUserClick}>
      <Title id={id}>{name.first}</Title>
      <Title id={id}>{name.last}</Title>
      <Text id={id}>{company}</Text>
    </Container>
  );
};

export default Usuario;
