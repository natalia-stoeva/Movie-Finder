import React from "react";
import { posterBaseURLMedium } from "../../utils/mediaUrls";
import { posterBaseURLSmall } from "../../utils/mediaUrls";

export const Poster = ({ path, alt, size, styles }) => {
  let posterSizeUrl;
  let imageClass;

  if (size === "small") {
    posterSizeUrl = posterBaseURLSmall;
  } else if (size === "medium") {
    posterSizeUrl = posterBaseURLMedium;
  }

  if (styles === "poster-img") {
    imageClass = "poster-img";
  } else if (styles === "cast-img") {
    imageClass = "cast-img mb-2 rounded-pill p-1";
  }

  return (
    <img
      src={
        path
          ? posterSizeUrl + path
          : "https://images.unsplash.com/photo-1538152911114-73f1aa6d6128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
      }
      alt={alt}
      className={imageClass}
    />
  );
};
