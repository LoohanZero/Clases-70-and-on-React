import React from "react";

const Container = ({ as='div', children, className }) => {
  const Component = as;


  return <Component className={`${className}`}> {children} </Component>;
};

export default Container;
