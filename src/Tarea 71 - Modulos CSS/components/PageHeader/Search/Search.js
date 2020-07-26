import React from "react";
import { BsSearch } from "react-icons/bs";
import Input from "../../Input";
import Container from "../../Container";
import style from "../Search/search.module.scss";

const Search = () => {
  return (
    <Container className={`${style.searchContainer}`}>
      <BsSearch className={`${style.searchIcon}`} />
      <Input type="search" props={{placeholder: "Search..."}}/>
    </Container>
  );
};

export default Search;
