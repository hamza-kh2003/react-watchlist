import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const MovieCard = ({ result }) => {
  const { addMovieToWatchList, watchList, watched, addMovieToWatched } =
    useContext(GlobalContext);

  let existMovieInWatchList = watchList.some((movie) => {
    return movie.id === result.id;
  });

  let existMovieInWatched = watched.some((movie) => {
    return movie.id === result.id;
  });

  return (
    <li className="grid grid-cols-2 mb-7">
      <div className="flex justify-end">
        {result.poster_path ? (
          <img
            className="w-[80px] h-[100px] rounded-sm  "
            src={`https://image.tmdb.org/t/p/w200${result.poster_path}`}
            alt={`${result.title} img`}
          />
        ) : (
          <div className="bg-gray-300 w-[80px] h-[100px] rounded-sm  "></div>
        )}
      </div>
      <div className="flex flex-col justify-between">
        <h1 className="ml-3 text-primary font-bold">{result.title}</h1>
        <p className="ml-3 text-gray-300">
          {result.release_date ? result.release_date.split("-")[0] : "...."}
        </p>
        <div className="">
          <button
            type="button"
            className={
              "bg-secondary mx-3 p-1 rounded-sm font-semibold disabled:bg-secondary/40 disabled:cursor-not-allowed  "
            }
            onClick={() => {
              addMovieToWatchList(result);
            }}
            disabled={existMovieInWatchList || existMovieInWatched}
          >
            ADD TO WATCHLIST
          </button>
          <button
            type="button "
            className="bg-secondary p-1 rounded-sm font-semibold disabled:bg-secondary/40 disabled:cursor-not-allowed "
            onClick={() => addMovieToWatched(result)}
            disabled={existMovieInWatched}
          >
            ADD TO WATHCED
          </button>
        </div>
      </div>
    </li>
  );
};

export default MovieCard;
