import React from "react";
import Search from "./Search/Search"
import style from './header.module.scss';
import Container from "Tarea 71/components/Container";
import Notifications from "../PageHeader/Notifications/Notification";
import UserIcon from "../PageHeader/UserIcon/UserIcon";



const PageHeader = () => {
  return (
    <Container as='header' className={`${style.PageHeader}`}>
      <Search />
      <Notifications />
      <UserIcon>N</UserIcon>
    </Container>
  );
};

export default PageHeader;
