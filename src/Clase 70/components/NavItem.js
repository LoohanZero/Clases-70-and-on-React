import React from "react";

// NavItem
// Crear un componente MenuItem que renderice un componente li con un componente a, el componente debe poder contener elementos dentro suyo
// El elemento li debe tener el estilo display: flex
// Debe aceptar la prop path que corresponde al atributo href del componente a

const MenuItem = ({ children, path }) => {
  return (
    <li style={{ display: "flex" }}>
      <a href={path}>{children}</a>
    </li>
  );
};

export default MenuItem;
