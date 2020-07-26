import React from "react";

// Header
// Crear un componente Header que renderice un elemento header y que pueda contener componente dentro suyo

const Header = ({ children }) => {
  return <header>{children}</header>;
};

export default Header;
