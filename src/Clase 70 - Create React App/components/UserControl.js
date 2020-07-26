import React from "react";

// UserControl
// Crear un componente UserControl que acepte una prop user (que es un string). Si user tiene algún valor, debe renderizar un componente p que diga Hola ${user} y un componente a que diga Logout, en cambio si user no tiene ningún valor, debe mostrar dos componentes a, uno que diga Login y otro Register. Separar luego ambas opciones en dos componentes distintos: GuestUserMessage (para cuando user no tiene ningún valor) y LoggedUserMessage

const GuestUserMessage = () => {
  const infoStyles = {
    display: "flex",
    flexDirection: "column",
  };
  return (
    <div style={infoStyles}>
      <a href="">Login</a>
      <a href="">Register</a>
    </div>
  );
};

const LoggedUserMessage = ({ children }) => {
  const infoStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  return (
    <div style={infoStyles}>
      <p>{children}</p>
      <a href="">Logout</a>
    </div>
  );
};

const UserControl = ({ user }) => {
  return user ? (
    <LoggedUserMessage>Welcome, {user}!</LoggedUserMessage>
  ) : (
    <GuestUserMessage></GuestUserMessage>
  );
};

export default UserControl;
