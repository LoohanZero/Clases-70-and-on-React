import React from "react";
import { GrSquare } from "react-icons/gr";
import Container from "../../Container";
import Title from "../../Title";
import style from "Tarea 71/components/Aside/PageLogo/title.module.scss";

const PageLogo = ({ text, className }) => {
  return (
    <Container className={`${className}`}>
      <GrSquare />
      <Title className={`${style.title}`}>{text}</Title>
    </Container>
  );
};

export default PageLogo;
