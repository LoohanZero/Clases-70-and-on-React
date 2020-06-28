import React from "react";
import Style from "../button/button.module.scss";

const Button = ({
  iconLeft,
  iconRight,
  variant = "default",
  roundend,
  children,
}) => {


return <button className={`${Style[variant]} ${Style.button}`}>{iconLeft}{children}{iconRight}</button>;
};

export default Button;
