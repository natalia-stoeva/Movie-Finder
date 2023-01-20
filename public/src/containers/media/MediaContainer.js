import React from "react";
import { Poster } from "../../components/media/Poster";
import { Video } from "../../components/media/Video";

export const MediaContainer = ({
  posterPath,
  videoKey,
  alt,
  imgSize,
  imgStyles,
}) => {
  return (
    <div className="row">
      <div className="col-3">
        <Poster
          path={posterPath}
          alt={alt}
          size={imgSize}
          styles={imgStyles}
        />
      </div>

      <div className="col-9">
        <Video videoKey={videoKey} />
      </div>
      {/* "poster-img img-thumbnail" */}
    </div>
  );
};
