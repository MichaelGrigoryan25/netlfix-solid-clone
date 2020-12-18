import "./Row.css";
import axios from "./axios";
import { createState, createComputed } from "solid-js";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setState] = createState({ movies: [] });

  createComputed(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setState("movies", request.data.results);
      return request.data.results;
    }
    fetchData();
  });

  return (
    <div className="row">
      <h2 align="left">{title}</h2>

      <div className="row__posters">
        {movies.movies.map((movie) => {
          return (
            <img
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Row;
