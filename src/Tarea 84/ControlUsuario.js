import React, {useContext} from "react";
import styled from "styled-components";
import DetalleUsuario from "./DetalleUsuario";
import UserContext from "./contexts/UserContext"


const ControlUsuario = () => {
    const {userID} = useContext(UserContext)
  return (
    <>
      {userID && <DetalleUsuario/>}
    </>
  );
};

export default ControlUsuario;
