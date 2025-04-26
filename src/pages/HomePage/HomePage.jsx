import { useState, useEffect } from "react";
import MoviesList from "../../components/MovieList/MovieList";
import { getTradingMovies } from "../../service/tmdb-api";
import c from "./HomePage.module.css";
export default function HomePage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await getTradingMovies();
        setMovies(data.results);
      } catch (error) {
        console.log("There is an errror:", error);
      }
    }
    fetchMovies();
  }, []);
  return (
    <div>
      <h1>Tranding films</h1>
      <MoviesList movies={movies} />
    </div>
  );
}
