import React, { useContext } from "react";
import styled from "styled-components";
import PaginadoContext from "./contexts/PaginadoContext";
import data from "./data";

const Container = styled.div`
  display: flex;
`;

const Lista = styled.ul`
  display: flex;
  list-style: none;
`;

const ItemLista = styled.li`
  cursor: pointer;
  font-weight: bold;
  color: #6585ab;
  background-color: white;
  line-height: 40px;
  width: 40px;
  margin: 10px;
  text-align: center;
  transition: 0.3s;
  border-radius: 3px;

  &:hover {
    color: white;
    background-color: #6585ab;
    transition: 0.3s;
  }
`;

const Paginado = () => {
  const { handlePaginaClick, inputValue } = useContext(PaginadoContext);

  const array = [];

  const cantidadPaginas = data.length / inputValue;

  for (let i = 0; i < cantidadPaginas; i++) {
    array.push(Number(i) + 1);
  }

  return (
    <Container>
      <Lista>
        {array.map((pagina) => (
          <ItemLista onClick={handlePaginaClick} key={pagina} value={pagina}>
            {pagina}
          </ItemLista>
        ))}
      </Lista>
    </Container>
  );
};

export default Paginado;
