import React from "react";
import styled from "styled-components";

const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  width: 75%;
`;

const Title = styled.h2`
  font-size: 26px;
  color: firebrick;
`;

const Text = styled.p`
  font-size: 18px;
  color: grey;
`;
const Image = styled.img`
  border-radius: 10px;
  width: 300px;
`;

const Button = styled.button`
    border-radius: 10px;

`




const Card = ({ title, text, image, ...props }) => {
  return (
    <StyledCard {...props} >
      <Title as="h3">{title}</Title>
      <Image src={image} />
      <Text>{text}</Text>
      <Button variant="filled" />
    </StyledCard>
  );
};

export default Card;
