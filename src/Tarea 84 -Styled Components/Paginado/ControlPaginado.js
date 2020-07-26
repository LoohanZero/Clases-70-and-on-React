import React, {useContext} from "react";
import Paginado from "./Paginado";
import styled from "styled-components";
import PaginadoContext from "./contexts/PaginadoContext"

const StyledInput = styled.input`
  line-height: 40px;
  width: 60px;
  padding: 5px;
  margin-right: 10px;
`;

// const Button = styled.input`
//   width: 70px;
//   height: 50px;
//   border-radius: 10px;
//   border: 1px solid white;
//   font-size: 18px;
//   background-color: #6585ab;
//   color: white;
//   cursor: pointer;

//   &:hover {
//     border: 1px solid #6585ab;
//     background-color: white;
//     color: #6585ab;
//     transition: 0.3s;
//   }
// `;
const Container = styled.div`
  display: flex;
  align-items: center;
`;

const ControlPaginado = () => {
    const {handleInputValue} = useContext(PaginadoContext)



  return (
    <>
      <Paginado />
      <Container>
        <StyledInput type="number" min="1" max="50" onChange={handleInputValue}/>
        {/* <Button type="Submit" value="Send" onClick={handleButtonClick}/> */}
      </Container>
    </>
  );
};

export default ControlPaginado;
