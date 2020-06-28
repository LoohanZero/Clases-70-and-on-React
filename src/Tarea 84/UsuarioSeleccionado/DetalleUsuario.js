import React, { useContext } from "react";
import styled from "styled-components";
import UserContext from "./contexts/UserContext";
import data from "./data";
const Text = styled.p`
  padding: 10px;
  font-weight: bold;
  color: white;
`;

const DetailedText = styled(Text)`
  padding: 10px;
  font-weight: 100;
`;

const Container = styled.div`
display: flex;
`;

const StyledContainer = styled(Container)`
  border-radius: 15px;
  position: absolute;
  background-color: #6585ab;
  height: 300px;
  width: 500px;
  top: 150px;
  left: 500px;
  flex-direction: column;
  justify-content: center;
  padding-left: 70px;

  
`;

const DetalleUsuario = () => {
  const { userID } = useContext(UserContext);

  const userInfo = data.find((user) => user._id === userID);

  return (
    <StyledContainer>
      <Container>
        <Text>Age:</Text>
        <DetailedText>{userInfo.age}</DetailedText>
      </Container>
      <Container>
        <Text>Email:</Text>
        <DetailedText>{userInfo.email}</DetailedText>
      </Container>
      <Container>
        <Text>Address:</Text>
        <DetailedText>{userInfo.address}</DetailedText>
      </Container>
      <Container>
        <Text>Phone Number:</Text>
        <DetailedText>{userInfo.phone}</DetailedText>
      </Container>
    </StyledContainer>
  );
};

export default DetalleUsuario;
