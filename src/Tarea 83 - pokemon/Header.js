import React from "react";
import LanguageSelector from "./LanguageSelector";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
`;
const Header = () => {
  return (
    <StyledHeader>
      <LanguageSelector />
    </StyledHeader>
  );
};

export default Header;
