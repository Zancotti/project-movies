import React from "react";
import { MovieListItem } from "./MovieListItem";
import styled from "styled-components";

// Doing a map over the movieList to get 1 movie and send that information through as props, togheter with imageinformation to the MovieListItem (basically 1 movie)
// Set the key to movie.id.
export const MovieList = ({ movieList, imageInformation }) => {
  return (
    <MovieListContainer>
      {movieList.map((movie) => {
        return (
          <MovieListItem
            movie={movie}
            imageInformation={imageInformation}
            key={movie.id}
          />
        );
      })}
    </MovieListContainer>
  );
};

// -------------------css---------------------------

const MovieListContainer = styled.div`
  display: grid;
  flex-wrap: center;
  grid-template-columns: repeat(2, auto);
  row-gap: 4px;

  @media (min-width: 668px) and (max-width: 1024px) {
    justify-content: space-evenly;
  }
  @media only screen and (min-width: 1025px) {
    justify-content: space-evenly;
    grid-template-columns: repeat(4, auto);
  }
`;
