import React from "react";
import styled from "styled-components"
import Usuarios from "./Usuarios";
import data from "./data";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ListaUsuarios = () => {
  return (
    <Container>
      {data.map((usuario) => (
        <Usuarios
          id={usuario._id}
          key={usuario._id}
          nombre={usuario.name}
          compania={usuario.company}
          edad={usuario.age}
          email={usuario.email}
          telefono={usuario.phone}
          direccion={usuario.address}
        />
      ))}
    </Container>
  );
};

export default ListaUsuarios;
