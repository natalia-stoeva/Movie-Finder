//search params
const tmdbKey = process.env.REACT_APP_tmdb_key;
const keyParams = `?api_key=${tmdbKey}`;
const tmdbBaseURL = "https://api.themoviedb.org/3";
const english = "&language=en-US";

//multi search
export const multiSearch = async (query) => {
  const multiSearch = `${tmdbBaseURL}/search/multi${keyParams}${english}&query=${query}&page=1&include_adult=false`;
  console.log(multiSearch);
  try {
    const response = await fetch(multiSearch);
    if (response.ok) {
      const jsonResponse = await response.json();
      const searchResults = jsonResponse.results;
      return searchResults;
    }
  } catch (err) {
    console.log(err);
  }
};

//movie details by id (with append to response)
export const getDetails = async (id) => {
  const url = `${tmdbBaseURL}/movie/${id}${keyParams}${english}&append_to_response=videos,images,credits,similar`;
  console.log(url);
  try {
    const response = await fetch(url);

    if (response.ok) {
      const jsonResponse = await response.json();
      const movieDetails = jsonResponse;
      return movieDetails;
    }
  } catch (err) {
    console.log(err);
  }
};

//tv details by id
export const getTvDetails = async (id) => {
  const url = `${tmdbBaseURL}/tv/${id}${keyParams}${english}&append_to_response=videos,images,credits,similar`;
  console.log(url);

  try {
    const response = await fetch(url);

    if (response.ok) {
      const jsonResponse = await response.json();
      const tvDetails = jsonResponse;
      return tvDetails;
    }
  } catch (err) {
    console.log(err);
  }
};

//people
export const getPeople = async (id) => {
  const url = `${tmdbBaseURL}/person/${id}${keyParams}${english}&append_to_response=combined_credits,images,popular`;
  try {
    const response = await fetch(url);
    if (response.ok) {
      const jsonResponse = await response.json();
      const personDetails = jsonResponse;
      return personDetails;
    }
  } catch (err) {
    console.log(err);
  }
};

//trending movies
export const getTrendingMovies = async () => {
  const url = `${tmdbBaseURL}/trending/movie/day${keyParams}`;
  try {
    const response = await fetch(url);
    if (response.ok) {
      const jsonResponse = await response.json();
      const trendingMovies = jsonResponse;
      return trendingMovies.results;
    }
  } catch (err) {
    console.log(err);
  }
};

// trending tv shows
export const getTrendingTvShows = async () => {
  const url = `${tmdbBaseURL}/tv/popular/${keyParams}${english}&page=1`;
  try {
    const response = await fetch(url);
    if (response.ok) {
      const jsonResponse = await response.json();
      const popularTvShows = jsonResponse;
      return popularTvShows.results;
    }
  } catch (err) {
    console.log(err);
  }
};
