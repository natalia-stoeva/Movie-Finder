import React from "react";
import { MovieCard } from "../components/cards/MovieCard";

export const CardList = ({ items }) => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-around">
        {items.map((item, index) => {
          return (
            <MovieCard
              key={index}
              id={item.id}
              title={item.title || item.name}
              image={item.poster_path || item.profile_path}
              ratings={item.vote_average}
              popularity={item.popularity}
              date={item.release_date || item.birthday}
              mediaType={item.media_type || item.known_for_department}
            />
          );
        })}
      </div>
    </div>
  );
};
