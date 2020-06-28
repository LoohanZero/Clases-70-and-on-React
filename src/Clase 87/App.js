import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import axios from "axios";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
}
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color: #C0C0C0;
    display: flex; 
    justify-content: center;
  
}
`;
const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 30px;
`;

const Container = styled.div`
  margin: 10px;
`;

const Img = styled.img`
  width: 150px;
  height: 150px;
`;

const Card = styled.article`
  width: 500px;
  height: 500px;
`;

const Span = styled.span`
  display: inline-block;
  background-color: grey;
  color: white;
  margin: 10px;
  border-radius: 5px;
  line-height: 40px;
  width: 40px;
  text-align: center;
  cursor: pointer;
`;
const App = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState({});
  const [selectedID, setSelectedID] = useState(1);
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://rickandmortyapi.com/api/character/?page=${currentPage}&status=${selectedStatus}`
      )
      .then((response) => {
        setCharacters(response.data.results);
        setPages(response.data.info.pages);
      });
  }, [currentPage, selectedStatus]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${selectedID}`)
      .then((response) => {
        setSelectedCharacter(response.data);
      });
  }, [selectedID]);

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      <Container>
        <select onChange={handleStatusChange}>
          <option value="">All</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </Container>
      <MainContainer>
        {characters.map((character) => (
          <Container
            key={character.id}
            onClick={() => setSelectedID(character.id)}
          >
            <Img src={character.image} />
            <h3>{character.name}</h3>
          </Container>
        ))}
      </MainContainer>
      <Container>
        {Array(pages)
          .fill()
          .map((page, index) => (
            <Span key={index} onClick={() => setCurrentPage(index + 1)}>
              {index + 1}
            </Span>
          ))}
      </Container>
      <Card>
        <h1>{selectedCharacter.name}</h1>
        <img src={selectedCharacter.image} />
        <p>{selectedCharacter.status}</p>
        <p>{selectedCharacter.species}</p>
      </Card>
    </>
  );
};

export default App;
