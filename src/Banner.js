import "./Banner.css";
import axios from "./axios";
import requests from "./requests";
import { createComputed, createState, unwrap } from "solid-js";

const Banner = () => {
  const [state, setState] = createState({ movie: {} });

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  createComputed(async () => {
    const { data } = await axios.get(requests.fetchNetflixOriginals);
    const movie = data.results[Math.floor(Math.random() * 10 - 1)];
    setState({ movie, movies: data.results });
  });

  return (
    <header
      style={{
        "background-size": "cover",
        "background-image": `url("https://image.tmdb.org/t/p/original/${state.movie?.backdrop_path}")`,
        "background-position": "center center",
      }}
      className="banner"
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {state.movie?.name ||
            state.movie?.title ||
            state.movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">
          {truncate(state.movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner--fadeBottom"></div>
    </header>
  );
};

export default Banner;
