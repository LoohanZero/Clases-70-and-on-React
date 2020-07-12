import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/CharactersCard";



const Container = styled.div`
  padding-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #C0C0C0;
`;

const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const getCharacters = async () => {
      const response = await fetch(
        "https://gateway.marvel.com/v1/public/characters?apikey=0e10884938787c40366929ce9fde20f4"
      );
      const data = await response.json();
      setCharacters(data.data.results);

    };
    getCharacters();
  }, []);

  return (
    <Container>
      {characters &&
        characters.map((character) => (
          <Card key={character.id} character={character} />
        ))}
    </Container>
  );
};

export default CharactersPage;
