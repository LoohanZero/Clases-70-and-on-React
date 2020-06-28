import React from "react";
import Container from "../../Container";
import PText from "../../PText";
import { FiChevronDown } from "react-icons/fi";
import style from "../UserIcon/usericon.module.scss";

const UserIcon = ({ children }) => {
  return (
    <Container className={`${style.userContainer}`}>
      <Container className={`${style.userIcon}`}>
        <PText>{children}</PText>
      </Container>
      <FiChevronDown />
    </Container>
  );
};

export default UserIcon;
