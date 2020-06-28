import React from "react";

const Input = ({ type, props }) => {
  return <input type={`${type}`} placeholder={`${props.placeholder}`} />;
};

export default Input;
