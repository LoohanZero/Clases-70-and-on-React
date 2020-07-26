import React from "react";

// BlogArticle
// Crear un componente BlogArticle que renderice un componente main y que pueda contener componente dentro suyo

const BlogArticle = ({ children }) => {
  return <main>{children}</main>;
};

export default BlogArticle;
