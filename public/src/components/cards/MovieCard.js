import React from "react";
import { posterBaseURLMedium } from "../../utils/mediaUrls";
import { Link } from "react-router-dom";
//import { AddButton } from "../AddButton/AddButton";
import { RatingsBar } from "../ratingsBar/ratingsBar";

const moment = require("moment");

export const MovieCard = ({
  id,
  title,
  image,
  ratings,
  popularity,
  date,
  mediaType,
}) => {
  let path;
  if (mediaType === "movie") {
    path = `/movie/${id}`;
  } else if (mediaType === "tv") {
    path = `/tv/${id}`;
  } else {
    path = `/people/${id}`;
  }

  //round the ratings to 2 decimal points
  if (ratings) {
    const roundedRatings = Number(Math.round(ratings * 10) / 10);
    ratings = roundedRatings;
  } else if(ratings == 0) {
    ratings = "--"
  }

  //round popularity
  if(popularity){
    const rounded = Number(Math.round(popularity))
    popularity = rounded
  }

  //get the release year
  if (date) {
    var formated = moment(date).format("MMM DD, YYYY");
    date = formated;
  }

  return (
    <div className="card movie-card" style={{ width: "15rem" }}>
      <a key={id} href={path}>
        <img
          src={
            image
              ? posterBaseURLMedium + image
              : "https://images.unsplash.com/photo-1538152911114-73f1aa6d6128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
          }
          alt={title}
          className="movie-thumb card-img-top"
        />

        <div className="movie-info-wrapper card-body">
          <h2 className="title">{title}</h2>

          {ratings && <RatingsBar number={ratings} />}

          {date && <p className="info-text fst-italic">{date}</p>}

          {popularity && (
            <p className="info-text">
              Popularity <span className="info-values">{popularity}</span>
            </p>
          )}
        </div>
      </a>
      {/* <AddButton /> */}
    </div>
  );
};
