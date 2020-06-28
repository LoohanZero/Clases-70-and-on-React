import React from "react";
import AsideFooter from "./AsideFooter";
import Container from "../Container";
import List from "./List/List";
import ListItem from "./ListItem/ListItem";
import Nav from "./Nav/Nav";
import PageLogo from "./PageLogo/PageLogo";
import Subtitle from "./Subtitle/Subtitle";
import style from "../Aside/aside.module.scss";

const Aside = () => {
  return (
    <Container as="aside" className={`${style.aside}`}>
      <Container as="header" className={`${style.logoContainer}`}>
        <PageLogo className={`${style.logoContent}`} text="Courses"></PageLogo>
      </Container>

      <Nav>
        <Container>
          <Container className={`${style.asideDiv}`}>
            <Subtitle>Menu</Subtitle>
            <List>
              <ListItem className="fas fa-book">My Courses</ListItem>
              <ListItem className="far fa-list-alt">Browse Courses</ListItem>
              <ListItem className="fas fa-clone">My Categories</ListItem>
              <ListItem className="far fa-envelope">My Messages</ListItem>
            </List>
          </Container>
          <Container className={`${style.asideDiv}`}>
            <Subtitle>Groups</Subtitle>
            <List>
              <ListItem className="far fa-circle">UI/UX</ListItem>
              <ListItem className="far fa-circle">Industrial Design</ListItem>
              <ListItem className="far fa-circle">Architecture</ListItem>
              <ListItem className="fas fa-plus">Add Group</ListItem>
            </List>
          </Container>
        </Container>
      </Nav>

      <Container as="footer" className={`${style.darkMode}`}>
        <AsideFooter
          className={`${style.darkModeContainer}`}
          text="Dark Mode"
        />
      </Container>
    </Container>
  );
};

export default Aside;
