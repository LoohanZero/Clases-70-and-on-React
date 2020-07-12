import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #151515;
  box-sizing: border-box;
  width: 100vw;
  height: 40px;
  margin-bottom: 25px;
`;

const Page = styled.a`
  cursor: pointer;
  background-color: transparent;
  text-decoration: none;
  color: #ffffff;
  border: none;
  outline: none;
  text-transform: uppercase;
  width: 100px;
  font-weight: bold;
  font-size: 11px;
  line-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;

  &:hover {
    background-color: #464646;
    transition: 0.3s;
  }
  &:active {
    background-color: #5b5b5b;
    transition: 0.3s;
  }
`;

const PageSelector = ({ maxPage, limit, totalCount }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const history = useHistory();
  const { pathname, search } = useLocation();
  const aVer = useLocation()

  const previousPage = () => {
    history.goBack();
  };

  console.log(aVer)

  const toNextPage = () => {
    const searchParams = new URLSearchParams(search);
    const offset = limit*currentPage;
    console.log(offset)
    searchParams.set("offset", offset);
    searchParams.set("limit", limit);


    const newUrl = `${pathname}?${searchParams.toString()}&apikey=0e10884938787c40366929ce9fde20f4`;
    console.log(newUrl);


    history.push(newUrl);
    setCurrentPage(currentPage + 1)

  }

  const toLastPage = () => {
    const searchParams = new URLSearchParams(search);
    const offset = totalCount - 18;
    console.log(offset)
    searchParams.set("offset", offset);
    searchParams.set("limit", limit);
    const newUrl = `${pathname}?${searchParams.toString()}&apikey=0e10884938787c40366929ce9fde20f4`;
    console.log(newUrl);
    history.push(newUrl);
  };

  return (
    <Container>
      <Page>{"<<"}</Page>
      <Page onClick={previousPage}>{"<"}</Page>
      <Page to="">{currentPage}</Page>
      <Page onClick={toNextPage}>{">"}</Page>
      <Page onClick={toLastPage}>{">>"}</Page>
    </Container>
  );
};

export default PageSelector;
