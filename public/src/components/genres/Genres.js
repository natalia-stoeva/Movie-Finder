import React from "react";

export const Genre = ({ genres }) => {
  return (
    <ul>
      {genres.map((genre) => {
        return <li className="btn info-values" key={genre}> {genre} </li>;
      })}
    </ul>
  );
};
