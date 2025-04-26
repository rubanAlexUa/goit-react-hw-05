import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../service/tmdb-api";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetchCast() {
      try {
        const response = await getMovieCast(movieId);
        setCast(response.cast);
      } catch (error) {
        console.log("There is an arror: ", error);
      }
    }
    fetchCast();
  }, [movieId]);
  if (!cast.length) return <p>No cast available.</p>;
  return (
    <ul>
      {cast.map((actor) => (
        <li key={actor.id}>
          {actor.profile_path && (
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
              width="100"
            />
          )}
          <p>
            <strong>{actor.name}</strong> as {actor.character}
          </p>
        </li>
      ))}
    </ul>
  );
}
