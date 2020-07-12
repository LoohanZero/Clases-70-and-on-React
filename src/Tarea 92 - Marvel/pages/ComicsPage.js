import React, { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";
import styled from "styled-components";
import Card from "../components/ComicsCard";
import PageSelector from "../components/PageSelector";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #c0c0c0;
  padding: 0 50px;
`;
const LoadingContainer = styled(Container)`
  display: flex;
  flex-wrap: none;
  justify-content: center;
  align-items: center;
  background-color: #c0c0c0;
  height: calc(100vh - 70px);
`;


const ComicsPage = () => {
  const [comics, setComics] = useState([]);
  const [totalCount, setTotalCount] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    const getComics = async () => {
      try {
        const response = await fetch(
          "https://gateway.marvel.com/v1/public/comics?&apikey=0e10884938787c40366929ce9fde20f4"
        );
        const data = await response.json();
        setComics(data.data.results);
        setTotalCount(data.data.total);
        console.log(data.data.total)
        setIsLoading(false);
        
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };
    getComics();
  }, []);

  return (
    <>
        {isLoading && (
        <LoadingContainer>
          <RingLoader css="override" size="100" />
        </LoadingContainer>
      )}
      <Container>
      {!isLoading && <PageSelector limit={20} totalCount={totalCount} />}
        {!isLoading && comics.map((comic) => <Card key={comic.id} comic={comic} />)}
      </Container>
    </>
  );
};

export default ComicsPage;
