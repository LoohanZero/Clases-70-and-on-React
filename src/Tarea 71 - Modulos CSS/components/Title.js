import React from "react";

const Titles = ({ children, level=1, text, className }) => {
  const Title = `h${level}`;
  return <Title className={className}>{children}{text}</Title>;
};

export default Titles;
