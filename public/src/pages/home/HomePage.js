import React, { useState, useEffect } from "react";
import { getTrendingMovies, getTrendingTvShows } from "../../controllers/api";
import ItemsCarousel from "react-items-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { CardList } from "../../containers/CardList";
import { MovieCard } from "../../components/cards/MovieCard";
import { Hero } from "../../containers/hero/Hero";
import { SectionTitle } from "../../components/section/SectionTitle";

export const HomePage = ({ searchResults }) => {
  //item carousel
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  //trending movies
  const [trendingMovies, setTrendingMovies] = useState(null);

  useEffect(() => {
    async function getTrendingData() {
      const trendingData = await getTrendingMovies();
      setTrendingMovies(trendingData);
    }
    getTrendingData();
  }, []);

  console.log(trendingMovies);
  //trending tv shows
  const [trendingTvShows, setTrendingTvShows] = useState(null);

  useEffect(() => {
    async function getPopulatTv() {
      const popularTv = await getTrendingTvShows();
      setTrendingTvShows(popularTv);
    }
    getPopulatTv();
  }, []);

  return (
    <div className="container-lg">
      <Hero />

      {searchResults ? (
        <div className="container-lg">
          <SectionTitle name={"Results"} />
          <CardList items={searchResults} />
        </div>
      ) : (
        ""
      )}

      {trendingMovies ? (
        <div className="container-lg">
          <SectionTitle name={"Now Trending "} />
          <CardList items={trendingMovies} />
        </div>
      ) : (
        ""
      )}

      {trendingTvShows ? (
        <div className="container-lg">
          <SectionTitle name={"TV Shows"} />

          <div className="row justify-content-center">
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
              {trendingTvShows.map((show) => {
                return (
                  <MovieCard
                    key={show.id}
                    id={show.id}
                    title={show.title}
                    image={show.poster_path}
                    // ratings={show.ratings}
                    popularity={show.popularity}
                    date={show.first_air_date}
                    mediaType={"tv"}
                  />
                );
              })}
            </ItemsCarousel>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
