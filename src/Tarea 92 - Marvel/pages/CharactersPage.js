import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { RingLoader } from "react-spinners";
import styled from "styled-components";
import Card from "../components/CharactersCard";
import PageSelector from "../components/PageSelector";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #c0c0c0;
  padding-bottom: 25px;
`;

const LoadingContainer = styled(Container)`
  display: flex;
  flex-wrap: none;
  justify-content: center;
  align-items: center;
  background-color: #c0c0c0;
  height: calc(100vh - 120px);
`;

const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const [totalCount, setTotalCount] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { search } = useLocation();

  let apikey = "?apikey=0e10884938787c40366929ce9fde20f4";

  if (search) {
    apikey = "";
  }

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    const getCharacters = async () => {
      try {
        const response = await fetch(
          `https://gateway.marvel.com/v1/public/characters${apikey}${search}&limit=18`
        );
        const data = await response.json();
        setCharacters(data.data.results);
        setTotalCount(data.data.total);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };
    getCharacters();
  }, [apikey, search]);
 
  return (
    <>
      {isLoading && (
        <LoadingContainer>
          <RingLoader css="override" size="100" />
        </LoadingContainer>
      )}
      <Container>
        {!isLoading && <PageSelector currentPage={currentPage} setCurrentPage={setCurrentPage} limit={18} totalCount={totalCount} />}
        {!isLoading &&
          characters.map((character) => (
            <Card key={character.id} character={character} />
          ))}
      </Container>
    </>
  );
};

export default CharactersPage;
