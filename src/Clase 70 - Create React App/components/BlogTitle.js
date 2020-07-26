import React from "react";

// BlogTitle
// Crear un componente BlogTitle que renderice un componente h1 y que pueda contener texto dentro suyo

const BlogTitle = ({ children }) => {
  return <h1>{children}</h1>;
};

export default BlogTitle;
