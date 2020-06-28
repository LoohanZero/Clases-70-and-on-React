import React from "react";
import style from "../ListItem/listitem.module.scss";
import Ptext from "../../PText";
import ListItemContainer from "../List/ListItemContainer";
import Link from "../../Link";
import Icon from "../../Icons";

const ListItem = ({ children, className }) => {
  const addClass =
    children.includes("Add Group") && true ? `${style.addGroup}` : "";

  let color = "";

  if (children === "UI/UX") {
    color = `${style.orange}`;
  }

  if (children === "Industrial Design") {
    color = `${style.violet}`;
  }

  if (children === "Architecture") {
    color = `${style.pink}`;
  }

  return (
    <ListItemContainer>
      <Link className={` ${addClass}`}>
        <Icon className={`${color} ${className}`} />
        <Ptext>{children}</Ptext>
      </Link>
    </ListItemContainer>
  );
};

export default ListItem;
