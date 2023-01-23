import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getDetails } from "../../controllers/api";
import ItemsCarousel from "react-items-carousel";
import { Heading } from "../../components/heading/Heading";
import { RatingsInfo } from "../../components/ratingsInfo/RatingsInfo";
import { MediaContainer } from "../../containers/media/MediaContainer";
import { Genre } from "../../components/genres/Genres";
import { SectionTitle } from "../../components/section/SectionTitle";
import { Text } from "../../components/text/Text";
import { TextAndInfo } from "../../components/text/TextAndInfo";
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
  const [director, setDirector] = useState(null);
  const [writers, setWriters] = useState(null);

  useEffect(() => {
    async function getMovieDetails() {
      const movie = await getDetails(id);
      const extractGenres = Array.from(movie.genres, (genre) => genre.name);
      const director = movie.credits.crew.filter(
        ({ job }) => job === "Director"
      );
      const writers = movie.credits.crew.filter(
        ({ job }) => job === "Screenplay"
      );

      setGenres(extractGenres);
      setMovie(movie);
      setCast(movie.credits.cast);
      setSimilar(movie.similar.results);
      setVideos(movie.videos.results);
      setDirector(director);
      setWriters(writers);
    }
    getMovieDetails();
  }, []);

  return (
    <div className="container">
      <Heading name={movie.title} />
      <RatingsInfo runtime={movie.runtime} status={movie.status} />
      {videos && (
        <MediaContainer
          posterPath={movie.poster_path}
          imgSize={"medium"}
          alt={movie.title}
          videoKey={videos[0].key}
          imgStyles={"poster-img"}
        />
      )}

      {genres && <Genre genres={genres} />}
      <Heading name={movie.tagline} />
      <Text text={movie.overview} />

      {director && (
        <div className="row">
          <div className="col-sm-2 col-md-1 col-12 ">
            {director.length === 1 ? <h5>Director: </h5> : <h5>Directors: </h5>}
          </div>

          <div className="col-sm-4 col-12">
            {director.map((director) => {
              return (
                <span className="px-2">
                  <Link to={`/people/${director.id}`} className="d-inline">
                    {director.name}
                  </Link>
                </span>
              );
            })}
          </div>
        </div>
      )}
     
      {writers && (
        <div className="row">
          <div className="col-sm-2 col-md-1 col-12 ">
            {writers.length === 1 ? <h5>Writer: </h5> : <h5>Writers:</h5>}
          </div>

          <div className="col-sm-4 col-12 ">
            {writers.map((writer) => {
              return (
                <span className="px-2">
                  <Link to={`/people/${writer.id}`}>{writer.name}</Link>
                </span>
              );
            })}
          </div>
        </div>
      )}

      <SectionTitle name={"Top Cast"} />
      {cast && <PeopleContainer cast={cast} />}

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
        {similar &&
          similar.map((movie) => {
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
          })}
      </ItemsCarousel>
    </div>
  );
};
