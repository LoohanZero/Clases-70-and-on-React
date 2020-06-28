import React from "react";

const Title = ({ children, as = "h1", color, align = "left"  }) => {
  const ThisTitle = as;

  return <ThisTitle>{children}</ThisTitle>;
};

export default Title;
