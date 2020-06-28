import React from "react";

const Link = ({ children, className }) => {
  return <a className={`${className}`}> {children}</a>;
};

export default Link;
