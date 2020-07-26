import React from "react";
import styled from "styled-components";

const Select = styled.select`
  background-color: white;
  color: #393e46;
  width: 200px;
  height: 50px;
  border: 1px solid #393e46;
  border-radius: 10px;
  font-size: 18px;
  padding-left: 15px;
  outline: none;
`;

const Option = styled.option``;

const LanguageSelector = () => {
  return (
    <Select>
      <Option>Español</Option>
      <Option>English</Option>
    </Select>
  );
};

export default LanguageSelector;
