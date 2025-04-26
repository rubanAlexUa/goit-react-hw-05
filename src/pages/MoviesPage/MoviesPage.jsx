import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import { searchMovie } from "../../service/tmdb-api";
import MovieList from "../../components/MovieList/MovieList";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await searchMovie(query);
        setMovies(data.results);
      } catch (error) {
        console.log("There is an error: ", error);
      }
    }
    fetchData();
  }, [query]);

  function handleSubmit(e) {
    e.preventDefault();
    const value = e.target.elements.movie_name.value;
    if (!value) return;
    setSearchParams({ query: value });
    e.target.reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="movie_name" />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </>
  );
}
