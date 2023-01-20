import React from "react";
import { MovieTile } from "../../components/cards/MovieTile";

export const CreditsList = ({ credits }) => {
  return (
    <ul className="list-group">
      {credits.map((credit, index) => {
        return (
          <MovieTile
            key={index}
            id={credit.id}
            image={credit.poster_path || credit.backdrop_path}
            title={credit.title}
            character={credit.character}
            year={credit.release_date || credit.first_air_date}
          />
        );
      })}
    </ul>
  );
};
