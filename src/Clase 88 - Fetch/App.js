import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

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
const MainContainer = styled.div``;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.article`
  width: 300px;
  height: 300px;
`;

const Img = styled.img`
  height: 250px;
`;

const useFetch = (url) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

const App = () => {
  const [category, setCategory] = useState("all");

  const [filters] = useFetch(
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
  );

  const [drinks] = useFetch(
    category !== "all"
      ? `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`
      : "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
  );

  return (
    <>
      {filters && (
        <MainContainer>
          <GlobalStyle />
          <select onChange={(event) => setCategory(event.target.value)}>
            <option value="all">All</option>
            {filters.drinks.map((drink, index) => (
              <option value={drink.strCategory} key={index}>
                {drink.strCategory}
              </option>
            ))}
          </select>
          <Container>
            {drinks &&
              drinks.drinks.map((drink) => (
                <Card key={drink.idDrink}>
                  <h1>{drink.strDrink}</h1>
                  <Img src={drink.strDrinkThumb} />
                </Card>
              ))}
          </Container>
        </MainContainer>
      )}
    </>
  );
};

export default App;
