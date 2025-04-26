import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";

const ACCESS_CODE =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjlmOGJkNjk3NzU5OGRiYzQ4YWE0Y2VkM2UxMmU1ZSIsIm5iZiI6MTc0NTI0NzEyNy42MjEsInN1YiI6IjY4MDY1Yjk3ZTNmYWMyZjkwMjhhMTE5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KJbNyQbcaSsW-06gY5BeweeQlsaqnKZNlgdTSlaDoe0";

const options = {
  headers: {
    Authorization: ACCESS_CODE,
  },
};

export async function getTradingMovies() {
  const response = await axios.get(`${BASE_URL}/trending/movie/day`, options);
  return response.data;
}

export async function searchMovie(query) {
  const response = await axios.get(
    `${BASE_URL}/search/movie?query=${encodeURIComponent(
      query
    )}&language=en-US&page=1&include_adult=false`,
    options
  );
  return response.data;
}

export async function getMovieDetails(movieId) {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}?language=en-US`,
    options
  );
  return response.data;
}

export async function getMovieCast(movieId) {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits`,
    options
  );
  return response.data;
}
export async function getMovieReviews(movieId) {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews`,
    options
  );
  return response.data;
}
