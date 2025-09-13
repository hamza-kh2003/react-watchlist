import { Eye, XCircle, EyeOffIcon } from "lucide-react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const MovieControls = ({ movie, type }) => {
  const {
    removeMovieFromWatchList,
    addMovieToWatched,
    removeMovieFromWatched,
    moveFromWacthedToWatchList,
  } = useContext(GlobalContext);
  return (
    <div className="text-secondary">
      {type === "watchlist" && (
        <>
          <button
            className="bg-black/70 mr-2 p-1 rounded-xl"
            onClick={() => {
              removeMovieFromWatchList(movie.id);
            }}
          >
            <XCircle />
          </button>
          <button
            className=" bg-black/70 p-1 rounded-xl"
            onClick={() => {
              addMovieToWatched(movie);
            }}
          >
            <Eye />
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button
            className="bg-black/70 mr-2 p-1 rounded-xl"
            onClick={() => {
              removeMovieFromWatched(movie.id);
            }}
          >
            <XCircle />
          </button>
          <button
            className="bg-black/70 mr-2 p-1 rounded-xl"
            onClick={() => {
              moveFromWacthedToWatchList(movie);
            }}
          >
            <EyeOffIcon />
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
