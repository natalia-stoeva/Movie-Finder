import React from "react";
import { Poster } from "../media/Poster";

export const PersonCard = ({ photoPath, name, character, id }) => {
  return (
    <div className="row d-flex align-items-center">
      <div className="col-lg-3 col-md-4 col-2">
        <a href={`/people/${id}`}>
          <Poster
            path={photoPath}
            alt={name}
            size={"small"}
            styles={"cast-img"}
          />
        </a>
      </div>

      <div className="col-md-8 col-9">
        <a href={`/people/${id}`}>{name}</a>
        <p className="info-values">{character}</p>
      </div>
    </div>
  );
};
