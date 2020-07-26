import React from "react";
import style from "../List/list.module.scss";

const List = ({ children }) => {
  return <ul style={style.ul}>{children}</ul>;
};

export default List;
