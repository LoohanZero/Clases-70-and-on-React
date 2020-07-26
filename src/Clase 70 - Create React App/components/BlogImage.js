import React from "react";

// BlogImage
// Crear un componente BlogImage que tome una prop img (un string) renderice un componente img donde src contiene el valor de img

const BlogImage = ({ img, alt }) => {
  const styles = {
    width: "1000px",
  };
  return <img style={styles} src={img} />;
};
export default BlogImage;
