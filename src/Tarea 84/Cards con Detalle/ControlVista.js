import React, { useContext } from "react";
import VistaContext from "./contexts/VistaContext";
import styled from "styled-components";

const Button = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid white;
  font-size: 18px;
  margin: 20px;
  background-color: #6585ab;
  color: white;
  cursor: pointer;

  &:hover {
    border: 1px solid #6585ab;
    background-color: white;
    color: #6585ab;
    transition: 0.3s;
  }
`;

const ControlVista = () => {
  const { handleShowDetails, handleHideDetails, showDetails } = useContext(
    VistaContext
  );

  return (
    <>
      {showDetails ? (
        <Button onClick={handleHideDetails}>Mostrar Resumen</Button>
      ) : (
        <Button onClick={handleShowDetails}>Mostrar Detalles</Button>
      )}
    </>
  );
};

export default ControlVista;
