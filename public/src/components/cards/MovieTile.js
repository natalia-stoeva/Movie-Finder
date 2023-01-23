import React from "react";
import { Poster } from "../media/Poster";
const moment = require("moment");

export const MovieTile = ({ id, image, title, year, character, mediaType }) => {

  if(year) {
    let formatedYear = moment(year).format("YYYY");
    year = formatedYear
    
  }
  return (
    <li className="list-group-item bg-dark mb-2">
      <article className="row">
        <div className="col-1">
          <a href={`/movie/${id}`}>
            <Poster
              path={image}
              alt={title}
              size={"small"}
              styles={"cast-img"}
            />
          </a>
        </div>

        <div className="col-10">
          <a href={`/movie/${id}`}>
            <h4>{title}</h4>
          </a>

          <p className="info-values fs-5">
            <i>{character}</i>
          </p>
        </div>

        <div className="col-1">
          <p className="info-values fs-6">
            <i>{year} </i>
          </p>
        </div>
      </article>
    </li>
  );
};
