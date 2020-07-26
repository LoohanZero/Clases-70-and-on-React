import React, { useContext } from "react";
import styled from "styled-components";
import VistaContext from "./contexts/VistaContext";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const CardContainer = styled(Container)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 250px;
  width: 250px;
  margin: 20px;
  border-radius: 15px;
`;

const Title = styled.h2``;

const Subtitle = styled.h3`
  color: #6585ab;
  font-weight: 400;
  line-height: 50px;
`;

const Text = styled.p``;

const BoldedText = styled(Text)`
  font-weight: bold;
`;

const DetailsContainer = styled(Container)`
  flex-wrap: none;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
`;

const ExtendedCardContainer = styled(CardContainer)`
  height: 400px;
  width: 400px;
`;
const Usuarios = ({
  id,
  nombre,
  compania,
  edad,
  email,
  telefono,
  direccion,
}) => {
  const { showDetails } = useContext(VistaContext);

  return (
    <Container>
      {showDetails ? (
        <ExtendedCardContainer>
          <Title>{nombre.first}</Title>
          <Title>{nombre.last}</Title>
          <Subtitle>{compania}</Subtitle>
          <DetailsContainer>
            <BoldedText>Edad:</BoldedText>
            <Text>{edad} años</Text>
          </DetailsContainer>
          <DetailsContainer>
            <BoldedText>E-mail:</BoldedText>
            <Text>{email}</Text>
          </DetailsContainer>
          <DetailsContainer>
            <BoldedText>Teléfono:</BoldedText>
            <Text>{telefono}</Text>
          </DetailsContainer>
          <DetailsContainer>
            <BoldedText>Dirección:</BoldedText>
            <Text>{direccion}</Text>
          </DetailsContainer>
        </ExtendedCardContainer>
      ) : (
        <CardContainer>
          <Title>{nombre.first}</Title>
          <Title>{nombre.last}</Title>
          <Subtitle>{compania}</Subtitle>
        </CardContainer>
      )}
    </Container>
  );
};

export default Usuarios;
