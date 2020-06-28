import React, { useContext } from "react";
import Usuarios from "./Usuarios";
import data from "./data";
import PaginadoContext from "./contexts/PaginadoContext";
import styled from "styled-components";



const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;


const ListaUsuario = () => {
  const { pagina, inputValue } = useContext(PaginadoContext);

  

  return (
    <Container>
      {data
        .slice(((pagina-1)*inputValue), (inputValue*pagina))
        .map((usuario) => (
          <Usuarios
            id={usuario._id}
            key={usuario._id}
            firstname={usuario.firstname}
            lastname={usuario.lastname}
            company={usuario.company}
            email={usuario.email}
          />
        ))}
    </Container>
  );
};

export default ListaUsuario;
