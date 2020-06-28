import React from "react";
import style from "../Subtitle/subtitle.module.scss"

const Subtitle = ({ children }) => {
  return <h2 className={`${style.subtitle}`}>{children}</h2>;
};

export default Subtitle;
