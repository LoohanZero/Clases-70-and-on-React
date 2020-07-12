import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./components/ComicsCard";


const Container = styled.div`
  padding-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 25px;
  background-color: #C0C0C0;
`;

const ComicsPage = () => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const getComics = async () => {
      const response = await fetch(
        "https://gateway.marvel.com/v1/public/comics?apikey=0e10884938787c40366929ce9fde20f4"
      );
      const data = await response.json();
      setComics(data.data.results);
    };
    getComics();
  }, []);

  return (
    <>
    <Container>
      {comics && comics.map((comic) => <Card key={comic.id} comic={comic} />)}
    </Container>
    </>
  );
};

export default ComicsPage;
