import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getTvDetails } from "../../controllers/api";
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

import { ChevronLink } from "../../components/link/ChevronLink";
import { TextAndInfo } from "../../components/text/TextAndInfo";

export const TvPage = () => {
  const { id } = useParams();
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const [tv, setTv] = useState(null);
  const [cast, setCast] = useState(null);
  const [videos, setVideos] = useState(null);
  const [similar, setSimilar] = useState(null);
  const [genres, setGenres] = useState(null);
  const [creators, setCreators] = useState(null);

  useEffect(() => {
    async function getTVDetails() {
      const tv = await getTvDetails(id);
      const extractGenres = Array.from(tv.genres, (genre) => genre.name);
      setGenres(extractGenres);
      setTv(tv);
      setCast(tv.credits.cast);
      setSimilar(tv.similar.results);
      setVideos(tv.videos.results);
      setCreators(tv.created_by);
    }
    getTVDetails();
  }, []);

  return (
    <div className="container">
      {tv ? (
        <header>
          <Heading name={tv.name} />
          <RatingsInfo runtime={tv.episode_run_time} status={tv.status} />
        </header>
      ) : (
        ""
      )}

      <section>
        {videos ? (
          <MediaContainer
            posterPath={tv.poster_path || tv.backdrop_path}
            imgSize={"medium"}
            alt={tv.name}
            videoKey={videos[0].key}
            imgStyles={"poster-img"}
          />
        ) : (
          ""
        )}
      </section>

      {genres ? (
        <section>
          <Genre genres={genres} />
        </section>
      ) : (
        ""
      )}

      {tv ? (
        <section>
          <Heading name={tv.tagline} />
          <Text text={tv.overview} />
          <div className="row">
            <div className="col d-flex">
              <TextAndInfo categorie={"Created By"} value={creators[0].name} />
              <TextAndInfo categorie={"Seasons"} value={tv.number_of_seasons} />
              <TextAndInfo
                categorie={"Episodes"}
                value={tv.number_of_episodes}
              />
            </div>
          </div>
        </section>
      ) : (
        ""
      )}

      {/* <h3>Created by: {creators}</h3> */}

      {cast ? (
        <section>
          <SectionTitle name={"Top Cast"} />
          <PeopleContainer cast={cast} />
          <div className="row d-flex justify-content-end">
            <div className="col-2">
              <ChevronLink href={"#"} text={"See Full Cast"} />
            </div>
          </div>
        </section>
      ) : (
        ""
      )}

      {similar ? (
        <section>
          <SectionTitle name="Similar Shows" />

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
            {similar.map((show) => {
              return (
                <MovieCard
                  key={show.id}
                  id={show.id}
                  title={show.title}
                  image={show.poster_path || show.backdrop_path}
                  ratings={show.vote_average}
                  popularity={show.popularity}
                  date={show.release_date || show.first_air_date}
                />
              );
            })}
          </ItemsCarousel>
        </section>
      ) : (
        ""
      )}
    </div>
  );
};
