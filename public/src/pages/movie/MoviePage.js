import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetails } from "../../controllers/api";
import ItemsCarousel from "react-items-carousel";
import { Heading } from "../../components/heading/Heading";
import { RatingsInfo } from "../../components/ratingsInfo/RatingsInfo";
import { MediaContainer } from "../../containers/media/MediaContainer";
import { Genre } from "../../components/genres/Genres";
import { SectionTitle } from "../../components/section/SectionTitle";
import { Text } from "../../components/text/Text";
import { PeopleContainer } from "../../containers/cast/PeopleContainer";
import { MovieCard } from "../../components/cards/MovieCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export const MoviePage = () => {
  //get the id of the clicked movie
  const { id } = useParams();

  //item carousel
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const [movie, setMovie] = useState(id);
  const [cast, setCast] = useState(null);
  const [videos, setVideos] = useState(null);
  const [similar, setSimilar] = useState(null);
  const [genres, setGenres] = useState(null);

  useEffect(() => {
    async function getMovieDetails() {
      const movie = await getDetails(id);
      const extractGenres = Array.from(movie.genres, (genre) => genre.name);
      setGenres(extractGenres);
      setMovie(movie);
      setCast(movie.credits.cast);
      setSimilar(movie.similar.results);
      setVideos(movie.videos.results);
    }
    getMovieDetails();
  }, []);

  return (
    <div className="container">
      <Heading name={movie.title} />
      <RatingsInfo runtime={movie.runtime} status={movie.status} />
      {videos ? (
        <MediaContainer
          posterPath={movie.poster_path}
          imgSize={"medium"}
          alt={movie.title}
          videoKey={videos[0].key}
          imgStyles={"poster-img"}
        />
      ) : (
        ""
      )}
      {genres ? <Genre genres={genres} /> : ""}
      <Heading name={movie.tagline} />
      <Text text={movie.overview} />

      <SectionTitle name={"Top Cast"} />
      {cast ? <PeopleContainer cast={cast} /> : ""}

      <SectionTitle name={"Similar Movies"} />

      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={5}
        gutter={20}
        leftChevron={
          <FontAwesomeIcon icon={faChevronLeft} className="chevron" />
        }
        rightChevron={
          <FontAwesomeIcon icon={faChevronRight} className="chevron" />
        }
        outsideChevron={false}
        chevronWidth={40}
      >
        {similar
          ? similar.map((movie) => {
              return (
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  image={movie.poster_path || movie.backdrop_path}
                  ratings={movie.vote_average}
                  popularity={movie.popularity}
                  date={movie.release_date || movie.first_air_date}
                  mediaType={"movie"}
                />
              );
            })
          : ""}
      </ItemsCarousel>
    </div>
  );
};
