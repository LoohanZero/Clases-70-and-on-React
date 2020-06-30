import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [pokemonList, setPokemonList] = useState();
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [maxPage, setMaxPage] = useState();
  const [filters, setFilters] = useState([]);

  const toFirstPage = () => setCurrentPage(1);

  const previousPage = () =>
    currentPage !== 1
      ? setCurrentPage(currentPage - 1)
      : setCurrentPage(maxPage);

  const nextPage = () => {
    currentPage !== maxPage
      ? setCurrentPage(currentPage + 1)
      : setCurrentPage(1);
  };

  const toLastPage = () => setCurrentPage(maxPage);

  const handleCheckedType = (event) => {
    if (event.target.checked) {
      setFilters([...filters, event.target.id]);
    } else {
      filters.length <= 1
        ? setFilters([])
        : setFilters(filters.filter((type) => type !== event.target.id));
    }
  };

  useEffect(() => {
    let isSubscribed = true;

    axios
      .get(
        `https://api.pokemontcg.io/v1/cards?&pageSize=${itemsPerPage}&page=${currentPage}&types=${filters.join(
          "|"
        )}`
      )
      .then((response) => {
        if (isSubscribed) {
          setPokemonList(response.data.cards);
          setMaxPage(Math.ceil(response.headers["total-count"] / itemsPerPage));
        }
      });

    return () => (isSubscribed = false);
  }, [currentPage, itemsPerPage, filters]);

  useEffect(() => {
    axios.get(`https://api.pokemontcg.io/v1/types`).then((response) => {
      setPokemonTypes(response.data.types);
    });
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        pokemonList,
        pokemonTypes,
        currentPage,
        itemsPerPage,
        maxPage,
        nextPage,
        previousPage,
        toFirstPage,
        toLastPage,
        handleCheckedType,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonProvider };
export default PokemonContext;
