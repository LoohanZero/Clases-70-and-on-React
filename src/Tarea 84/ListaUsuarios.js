import styled from "styled-components";
import React from 'react';
import data from "./data";
import Usuario from "./Usuario"

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

`;


const ListaUsuarios = () => {
    return (
        <Container>
            {data.map((usuario) => <Usuario key={usuario._id} id={usuario._id} name={usuario.name} company={usuario.company}/>)}
        </Container>
    )
}

export default ListaUsuarios
