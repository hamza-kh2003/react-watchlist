import MovieControls from "./MovieControls";

const WatchListCard = ({ movie, type }) => {
  return (
    <div className="relative  group ">
      {movie.poster_path ? (
        <li>
          <img
            className="border  w-[202px] h-[302px] rounded-md  "
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} img`}
          />
        </li>
      ) : (
        <li>
          <div className="bg-gray-300  w-[202px] h-[302px]  flex justify-center items-center rounded-md">
            {movie.title}-img
          </div>
        </li>
      )}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition">
        <MovieControls type={type} movie={movie} />
      </div>
    </div>
  );
};

export default WatchListCard;
