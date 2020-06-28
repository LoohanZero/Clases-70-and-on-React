import React from "react";

// Comment
// Crear un componente Comment que renderice un componente article y que pueda contener componentes dentro suyo

const Comment = ({ children }) => {
  return <article>{children}</article>;
};

export default Comment;
