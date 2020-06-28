import React from "react";
import Container from "Tarea 71/components/Container";
import Title from "Tarea 71/components/Title";
import PText from "Tarea 71/components/PText";
import CardImage from "Tarea 71/components/Main/Card/CardImage/CardImage";
import style from "Tarea 71/components/Main/Card/card.module.scss";

const Card = ({ title, text, img, alt, children }) => {
  return (

    <Container className={`${style.cardContainer}`} >
    <Container className={`${style.card}`}>
        <CardImage src={img} alt={alt}/>
      <Container className={`${style.cardTextContainer}`}>
        <Title level="4" text={title} />
        <PText>{text}</PText>
        <Container className={`${style.users}`}>{children}</Container>
      </Container>
    </Container>


    </Container>
  );
};

export default Card;
