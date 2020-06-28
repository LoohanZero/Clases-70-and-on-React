import React from "react";
import Filters from "./Filters";
import styled from "styled-components";

const StyledAside = styled.aside`
  display: flex;
  background-color: #393e46;
  
`;

const Aside = () => {
  return (
    <StyledAside>
      <Filters />
    </StyledAside>
  );
};

export default Aside;
